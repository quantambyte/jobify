import { useEffect } from 'react';

// context
import { useAppContext } from '../context/appContext';

// components
import Loading from './Loading';
import Job from './Job';

import JobsContainerWrapper from '../assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const {
    getAllJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    company,
  } = useAppContext();

  useEffect(() => {
    getAllJobs();
  }, []);

  if (isLoading) return <Loading center />;

  if (jobs.length === 0) {
    return (
      <JobsContainerWrapper>
        <h2>No jobs to display...</h2>
      </JobsContainerWrapper>
    );
  }
  return (
    <JobsContainerWrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'}
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </JobsContainerWrapper>
  );
};

export default JobsContainer;
