// useContext
import { useAppContext } from '../context/appContext';

const Dashboard = () => {
  const { removeUserFromLocalStorage } = useAppContext();
  const handleClick = () => {
    removeUserFromLocalStorage();
  };
  return (
    <>
      <button onClick={handleClick}>Clear LocalStorage</button>
    </>
  );
};

export default Dashboard;
