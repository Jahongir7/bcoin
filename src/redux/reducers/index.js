import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import langReducer from './langReducer';
import shriftReducer from './shriftReducer';

const appReducer = combineReducers({
  authReducer,
  adminReducer,
  langReducer,
  shriftReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
