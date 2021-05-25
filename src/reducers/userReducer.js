//@ action Types
import {
  AUTH_REQUEST,
  AUTH_REQUEST_FAILURE,
  AUTH_REQUEST_SUCCESSFUL,
  SET_TOKEN,
  GET_USER_REQUEST_FAILURE,
  GET_USER_REQUEST_SUCCESSFUL,
  GET_USER_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESFUL,
  SIGNUP_REQUEST_FAILURE,
} from '../constants/actionTypes';

const initialData = {
  user: {
    data: null,
    isLoading: false,
    successful: false,
    error: false,
  },
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        user: {
          ...state.user,
          data: null,
          isLoading: true,
          successful: false,
          error: false,
        },
      };
    }
    case SIGNUP_REQUEST_SUCCESFUL: {
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload.user,
          isLoading: false,
          successful: true,
          error: false,
        },
      };
    }
    case SIGNUP_REQUEST_FAILURE: {
      return {
        ...state,
        user: {
          ...state.user,
          data: null,
          isLoading: false,
          successful: false,
          error: action.payload.error,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
