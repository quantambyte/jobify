import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// pages
import {
  Landing,
  Register,
  Error,
  ProtectedRoute,
} from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
} from './pages/Dashboard/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/* <Route index element={<Stats />} /> */}
          <Route index element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
