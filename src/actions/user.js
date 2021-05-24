import AsyncStorage from '@react-native-community/async-storage';

import {HOST, END_POINTS} from '../constants/constants';
import {
  AUTH_REQUEST,
  AUTH_REQUEST_SUCCESSFUL,
  AUTH_REQUEST_FAILURE,
  GET_USER_REQUEST,
  GET_USER_REQUEST_FAILURE,
  GET_USER_REQUEST_SUCCESSFUL,
  SET_TOKEN,
} from '../constants/actionTypes';

//@utils
import {showMessage} from '../utils/general';

export const authUser = (data, navigation) => dispatch => {
  const url = `${HOST}/${END_POINTS.auth}`;
  dispatch(authRequest());
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(res => {
      dispatch(setToken({token: res.token.accessToken, userId: res.user.id}));
      dispatch(authRequestSuccessful());

      AsyncStorage.setItem('token', res.token.accessToken);
      AsyncStorage.setItem('userId', `${res.user.id}`);
      navigation.navigate('Home');
    })
    .catch(error => {
      dispatch(authRequestFailure());
    });
};

const authRequest = () => dispatch => {
  dispatch({
    type: AUTH_REQUEST,
  });
};

const authRequestSuccessful = () => dispatch => {
  dispatch({
    type: AUTH_REQUEST_SUCCESSFUL,
  });
};

const authRequestFailure = () => dispatch => {
  dispatch({
    type: AUTH_REQUEST_FAILURE,
  });
};

export const refreshToken = (token, tokenToRefresh, navigation) => dispatch => {
  const url = `${HOST}/${END_POINTS.refreshToken}`;
  const data = {
    token: token,
    refreshToken: tokenToRefresh,
  };
  fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(res => {
      AsyncStorage.setItem('token', res.token);
      AsyncStorage.setItem('refreshToken', res.refreshToken);
      dispatch(
        setToken({token: res.token, refreshTokenValue: res.refreshToken}),
      );
    })
    .catch(error => {
      AsyncStorage.multiRemove(['token', 'refreshToken', 'tokenExpiresIn']);
      navigation.navigate('Login');
    });
};

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token,
  });
};

export const getUser = () => (dispatch, getState) => {
  const {token, userId} = getState().userReducer;
  const url = `${HOST}/${END_POINTS.users}/${userId}`;
  dispatch(getUserRequest());
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(res => {
      dispatch(getUserRequestSuccessful(res));
    })
    .catch(error => {
      console.log(error, 'error');
      dispatch(getUserRequestFailure());
    });
};

const getUserRequest = () => dispatch => {
  dispatch({
    type: GET_USER_REQUEST,
  });
};

const getUserRequestFailure = () => dispatch => {
  dispatch({
    type: GET_USER_REQUEST_FAILURE,
  });
};

const getUserRequestSuccessful = user => dispatch => {
  dispatch({
    type: GET_USER_REQUEST_SUCCESSFUL,
    payload: user,
  });
};

export const updateUser = data => (dispatch, getState) => {
  const {token, userId} = getState().userReducer;
  const url = `${HOST}/${END_POINTS.users}/${userId}`;
  dispatch(updateUserRequest());
  fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(res => {
      showMessage('Actualización', 'Usuario actualizado correctamente');
      dispatch(updateUserRequestSuccessful(res));
    })
    .catch(error => {
      console.log(error, 'error');
      dispatch(updateUserRequestFailure());
    });
};

const updateUserRequest = () => dispatch => {
  dispatch({
    type: GET_USER_REQUEST,
  });
};

const updateUserRequestFailure = () => dispatch => {
  dispatch({
    type: GET_USER_REQUEST_FAILURE,
  });
};

const updateUserRequestSuccessful = user => dispatch => {
  dispatch({
    type: GET_USER_REQUEST_SUCCESSFUL,
    payload: user,
  });
};
