import { useState } from 'react';

// components
import { FormRow, Alert } from '../../components';

// custom hook (context)
import { useAppContext } from '../../context/appContext';

// styled component
import ProfilePage from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  // state
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
  } = useAppContext();

  // state of component
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // if any field is missing
    if (!email || !name || !lastName || !location) {
      displayAlert();
      return;
    }

    // updating
    updateUser({ name, email, lastName, location });
  };

  return (
    <ProfilePage>
      <form onSubmit={handleSubmit} className='form'>
        <h3>Profile</h3>

        {showAlert && <Alert />}

        <div className='form-center'>
          {/* name */}
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />

          {/* last name */}
          <FormRow
            labelText='last name'
            type='text'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />

          {/* email */}
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          {/* location */}
          <FormRow
            type='text'
            name='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />

          {/* button */}
          <button
            className='btn btn-block'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait ...' : 'save changes'}
          </button>
        </div>
      </form>
    </ProfilePage>
  );
};

export default Profile;
