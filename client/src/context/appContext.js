import { useContext, createContext, useReducer } from 'react';
import axios from 'axios';

import reducer from './reducer';

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from './actions';

const token = localStorage.getItem('user');
const user = localStorage.getItem('token');
const userLocation = localStorage.getItem('location');

// initialState
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  aleryType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state
  const [state, dispatch] = useReducer(reducer, initialState);

  //   displayAlert
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  //   clearAlert
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  // add to local storage
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  // removeUserFromLocalStorage
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('location');
  };

  // setupUser
  const setupUser = async (currentUser, endPoint, alertText) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const response = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token, location } = response.data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          alertText,
          user,
          token,
          location,
        },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        removeUserFromLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// making a hook
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
