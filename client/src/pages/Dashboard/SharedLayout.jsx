import { Outlet } from 'react-router-dom';
import SharedLayoutWrapper from '../../assets/wrappers/SharedLayout';

// components
import {
  Navbar,
  SmallSidebar,
  BigSidebar,
} from '../../components';

const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </SharedLayoutWrapper>
  );
};

export default SharedLayout;
