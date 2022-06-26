import { USER_LOADED, LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  phone: null,
  isAuthenticated: null,
  role: localStorage.getItem('role'),
  loading: true
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        phone: payload.phone,
        role: payload.isStudent
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        phone: payload.phone,
        isAuthenticated: true,
        role: payload.isStudent,
        loading: false
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        role: null,
        loading: false,
        phone: null
      };
    default:
      return state;
  }
};

export default authReducer;
