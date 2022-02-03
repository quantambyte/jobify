import JobInfoWrapper from '../assets/wrappers/JobInfo';

const JobInfo = ({ icon, text }) => {
  return (
    <JobInfoWrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </JobInfoWrapper>
  );
};

export default JobInfo;
