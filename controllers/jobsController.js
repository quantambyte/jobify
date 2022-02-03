import Job from '../models/Job.js';

import { StatusCodes } from 'http-status-codes';
import { BadRequest, NotFound } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequest('Please provide all values');
  }

  req.body.createdBy = req.user.userId;

  // creating new job
  const job = await Job.create(req.body);

  // sending response
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) throw new NotFound('No Job with this id');

  checkPermissions(req.user, job.createdBy);

  await job.remove();

  res.status(StatusCodes.OK).json({ msg: 'Job Removed :)' });
};

const getAllJobs = async (req, res) => {
  // fetching jobs
  const jobs = await Job.find({ createdBy: req.user.userId });

  // sending jobs
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;

  const { company, position, jobLocation } = req.body;

  // if value is missing
  if (!company || !position) {
    throw new BadRequest('Please Provide all values');
  }

  // finding job
  const job = await Job.findOne({ _id: jobId });

  // if no job found
  if (!job) {
    throw new NotFound(`No job with id ${jobId} found`);
  }

  // checking permissions
  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate(
    { _id: jobId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedJob });
};

const showStats = async (req, res) => {
  res.send('Show Stats Job');
};

export {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
};
