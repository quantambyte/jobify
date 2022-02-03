import { useState } from 'react';

import NavbarWrapper from '../assets/wrappers/Navbar';
import {
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
} from 'react-icons/fa';

import { useAppContext } from '../context/appContext';

// logo
import Logo from './Logo';

const Navbar = () => {
  // hook
  const { toggleSidebar, user, logoutUser } = useAppContext();

  // state
  const [showLogout, setShowLogout] = useState(false);

  return (
    <NavbarWrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          type='button'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>

        <div className='btn-container'>
          <button
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user && user.name}
            <FaCaretDown />
          </button>

          <div
            className={
              showLogout ? 'dropdown show-dropdown' : 'dropdown'
            }
          >
            <button
              type='button'
              className='dropdown-btn'
              onClick={logoutUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
