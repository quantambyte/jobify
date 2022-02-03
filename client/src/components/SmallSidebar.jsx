import SmallSidebarWrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
  // hook
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <SmallSidebarWrapper>
      <div
        className={
          showSidebar
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </SmallSidebarWrapper>
  );
};

export default SmallSidebar;
