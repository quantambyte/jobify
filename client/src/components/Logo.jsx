import logo from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <h1>
      <img src={logo} alt='jobify' className='logo' />
    </h1>
  );
};

export default Logo;
