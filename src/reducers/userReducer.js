//@ action Types
import {
  AUTH_REQUEST,
  AUTH_REQUEST_FAILURE,
  AUTH_REQUEST_SUCCESSFUL,
  SET_TOKEN,
  GET_USER_REQUEST_FAILURE,
  GET_USER_REQUEST_SUCCESSFUL,
  GET_USER_REQUEST,
} from '../constants/actionTypes';

const initialData = {
  auth: {
    isLoading: false,
    successful: false,
    error: false,
  },
  token: null,
  userId: null,
  refreshTokenValue: null,
  user: {
    data: null,
    isLoading: false,
    successful: false,
    error: false,
  },
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    }
    case AUTH_REQUEST: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: true,
          error: false,
          successful: false,
        },
      };
    }
    case AUTH_REQUEST_FAILURE: {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: true,
          isLoading: false,
          successful: false,
        },
      };
    }
    case AUTH_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          isLoading: false,
          successful: true,
        },
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        user: {
          ...state.user,
          error: false,
          isLoading: true,
          successful: false,
        },
      };
    }
    case GET_USER_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        user: {
          ...state.user,
          error: false,
          isLoading: false,
          successful: false,
          data: action.payload,
        },
      };
    }
    case GET_USER_REQUEST_FAILURE: {
      return {
        ...state,
        user: {
          ...state.user,
          error: true,
          isLoading: false,
          successful: false,
          data: null,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
