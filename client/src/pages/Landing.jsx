import { Link } from 'react-router-dom';
// styles
import LandingPage from '../assets/wrappers/LandingPage';

// component
import { Logo } from '../components';

// assets
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <>
      <LandingPage>
        <nav>
          <Logo />
        </nav>

        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Temporibus tempore magni quos harum
              recusandae eligendi, ab dolorum repudiandae, ea
              quidem quibusdam vel at nam obcaecati animi dolore
              illo laborum et.
            </p>
            <Link to='/register'>
              <button className='btn btn-hero'>
                Login/Register
              </button>
            </Link>
          </div>

          <img src={main} alt='main' className='img main-img' />
        </div>
      </LandingPage>
    </>
  );
};

export default Landing;
