import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  EDIT_FAIL,
  EDIT_SUCCESS,
  VALID_SUCCESS,
  VALID_FAIL,
} from "../types";

// Change state according to the type of action
const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: true,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case EDIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        token: true,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        token: false,
      };

    case EDIT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        token: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case VALID_SUCCESS:
      return {
        ...state,
        token: true,
      };

    case VALID_FAIL:
      return {
        ...state,
        token: false,
      };

    default:
      return state;
  }
};

export default authReducer;
