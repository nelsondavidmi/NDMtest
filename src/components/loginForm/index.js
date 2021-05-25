// @vendors
import React from 'react';
import {View} from 'react-native';

// @commons
import Input from '../input';
import AlertMessage from '../alertMessage';

const LoginForm = ({
  emailIsValid,
  error,
  email,
  password,
  passwordMask,
  onChangeField,
  onTogglePasswordMask,
}) => (
  <View>
    <Input
      value={email}
      onChangeText={value => onChangeField(value, 'email')}
      placeholder="Email"
      property="email"
      maxLength={60}
      onEndEditing={() => onChangeField(email.trim(), 'email')}
    />
    <Input
      type="password"
      value={password}
      onChangeText={value => onChangeField(value, 'password')}
      placeholder="Password"
      property="password"
      passwordMask={passwordMask}
      onTogglePasswordMask={onTogglePasswordMask}
      maxLength={30}
    />
    <AlertMessage
      message={error}
      type="error"
      show={error && !email && !password}
    />
    <AlertMessage
      message="This email is not valid"
      type="info"
      show={!emailIsValid && email}
    />
  </View>
);

export default LoginForm;
