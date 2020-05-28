import {
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE,
  REGISTER_POST_START,
  REGISTER_POST_SUCCESS,
  REGISTER_POST_FAILURE,
  LOGOUT,
} from "../actions/LoginActions";

const initialState = {
  isLoading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_POST_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        usertype: action.payload.userType,
        userId: action.payload.userId,
        loggedIn: true,

        isLoading: false,
      };
    case LOGIN_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case REGISTER_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_POST_SUCCESS:
      return {
        user: action.payload,

        loggedIn: true,
        isLoading: false,
      };
    case REGISTER_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOGOUT:
      localStorage.clear();
      window.location.href = "/";
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
