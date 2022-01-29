import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// logo
import { Logo, FormRow, Alert } from '../components';

// wrapper
import RegisterPage from '../assets/wrappers/RegisterPage';

// useAppContext
import { useAppContext } from '../context/appContext';

// initialState
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  // state
  const [values, setValues] = useState(initialState);

  // fetching loading and alert state from hook
  const { isLoading, showAlert, displayAlert, setupUser, user } =
    useAppContext();
  const navigate = useNavigate();

  // useEffect
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  //   handleChange
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'Registration',
      });
    }
  };

  //   toggle menu
  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };

  return (
    <RegisterPage className='full-page'>
      <form onSubmit={handleSubmit} className='form'>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button
          type='submit'
          className='btn btn-block'
          disabled={isLoading}
        >
          submit
        </button>

        <p>
          {values.isMember
            ? 'Not a member yet?'
            : 'Already a member?'}
          <button
            type='button'
            onClick={toggleMember}
            className='member-btn'
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </RegisterPage>
  );
};

export default Register;
