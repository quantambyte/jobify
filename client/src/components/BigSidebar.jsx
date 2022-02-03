import BigSideBarWrapper from '../assets/wrappers/BigSidebar';

import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Logo from './Logo';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <BigSideBarWrapper>
      <div
        className={
          showSidebar
            ? 'sidebar-container'
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </BigSideBarWrapper>
  );
};

export default BigSidebar;
