// Imports
import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  EDIT_SUCCESS,
  EDIT_FAIL,
  VALID_FAIL,
  VALID_SUCCESS,
} from "../types";
import axios from "axios";

axios.defaults.withCredentials = true;

const AuthState = (props) => {
  // Set initial state
  const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
    token: false,
  };

  // Init Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    try {
      // Make a get request at localhost:5000/api/auth
      const res = await axios.get("/api/auth");

      // Dispatch the action to reducer for USER_LOADED
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      if (err.response.status === 401) {
        console.log("This is the desired behaviour");
      }
      // Dispatch the action to reducer for AUTH_ERROR
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register Student
  const regStudent = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a post request at localhost:5000/api/users/student
      const res = await axios.post("api/users/student", formData, config);

      // Dispatch the action to reducer for REGISTER_SUCCESS
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful registration
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for REGISTER_FAIL
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Register Counsellor
  const regCounsellor = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a post request at localhost:5000/api/users/counsellor
      const res = await axios.post("api/users/counsellor", formData, config);

      // Dispatch the action to reducer for REGISTER_SUCCESS
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful registration
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for REGISTER_FAIL
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Register Admin
  const regAdmin = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a post request at localhost:5000/api/users/admin1234
      const res = await axios.post("api/users/admin1234", formData, config);

      // Dispatch the action to reducer for REGISTER_SUCCESS
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful registration
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for REGISTER_FAIL
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Edit Admin
  const editAdmin = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a put request at localhost:5000/api/editUsers/admin1234
      const res = await axios.put("api/editUsers/admin1234", formData, config);

      // Dispatch the action to reducer for EDIT_SUCCESS
      dispatch({
        type: EDIT_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful edit
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for EDIT_FAIL
      dispatch({
        type: EDIT_FAIL,
      });
    }
  };

  // Edit Counsellor
  const editCounsellor = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a put request at localhost:5000/api/editUsers/counsellor
      const res = await axios.put("api/editUsers/counsellor", formData, config);

      // Dispatch the action to reducer for EDIT_SUCCESS
      dispatch({
        type: EDIT_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful edit
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for EDIT_FAIL
      dispatch({
        type: EDIT_FAIL,
      });
    }
  };

  // Edit Student
  const editStudent = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a put request at localhost:5000/api/editUsers/student
      const res = await axios.put("api/editUsers/student", formData, config);

      // Dispatch the action to reducer for EDIT_SUCCESS
      dispatch({
        type: EDIT_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful edit
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for EDIT_FAIL
      dispatch({
        type: EDIT_FAIL,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a post request at localhost:5000/api/auth
      const res = await axios.post("api/auth", formData, config);

      // Dispatch the action to reducer for LOGIN_SUCCESS
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful login
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for LOGIN_FAIL
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axios.delete("/api/auth");

      // Dispatch the action to reducer for LOGOUT
      dispatch({ type: LOGOUT });
    } catch (err) {
      console.log(err);
    }
  };

  // Validate user
  const validate = async () => {
    try {
      const res = await axios.get("/api/auth/check");
      if (res.data === "Valid") {
        dispatch({
          type: VALID_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({
        type: VALID_FAIL,
      });
    }
  };

  // Clear Errors
  const clearErrors = () => {
    // Dispatch the action to reducer for CLEAR_ERRORS
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  return (
    <AuthContext.Provider
      // Provide these values to all components wrapped in AuthContext in App.js
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        token: state.token,
        regStudent,
        regCounsellor,
        login,
        loadUser,
        logout,
        clearErrors,
        regAdmin,
        editAdmin,
        editCounsellor,
        editStudent,
        validate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
