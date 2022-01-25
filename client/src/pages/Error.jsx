import { Link } from 'react-router-dom';

// asset
import errorImg from '../assets/images/not-found.svg';

// wrapper
import ErrorPage from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <ErrorPage className='full-page'>
      <div>
        <img src={errorImg} alt='not found' />
        <h3>Page not Found</h3>
        <p>
          We can't seem to find the page you're looking
          for
        </p>
        <Link to='/'>back to home</Link>
      </div>
    </ErrorPage>
  );
};

export default Error;
