import AsyncStorage from '@react-native-community/async-storage';
import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESFUL,
  SIGNUP_REQUEST_FAILURE,
} from '../constants/actionTypes';

const mapDataSignup = user => ({
  first_name: user.first_name,
  last_name: user.last_name,
  phone: user.phone,
  email: user.email,
  password: user.password,
  confirm_password: user.confirmPassword,
  image: user.image,
});

export const fetchSignup = (user, navigation) => dispatch => {
  const url = 'http://localhost:3001/user';
  const data = mapDataSignup(user);
  const body = JSON.stringify(data);

  dispatch(requestSignup());
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(res => res.json())
    .then(res => {
      dispatch(signupSuccessful(res));
      AsyncStorage.setItem('id', JSON.stringify(res.id));
      console.log(res);
    })
    .catch(err => {
      dispatch(signupError(err));
    });
};

const requestSignup = () => dispatch => {
  dispatch({
    type: SIGNUP_REQUEST,
  });
};

const signupSuccessful = user => dispatch => {
  dispatch({
    type: SIGNUP_REQUEST_SUCCESFUL,
    payload: {user},
  });
};

const signupError = error => dispatch => {
  dispatch({
    type: SIGNUP_REQUEST_FAILURE,
    payload: {error},
  });
};
