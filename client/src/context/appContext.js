import {
  useContext,
  createContext,
  useReducer,
} from 'react';

import reducer from './reducer';

import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';

// initialState
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  aleryType: '',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert }}
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
