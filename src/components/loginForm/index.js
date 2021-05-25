// @vendors
import React from 'react';
import {View} from 'react-native';

// @commons
import Input from '../input';
import AlertMessage from '../alertMessage';

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  passwordMask,
  setPasswordMask,
}) => (
  <View>
    <Input
      value={email}
      onChangeText={value => setEmail(value)}
      placeholder="Email"
      property="email"
      maxLength={60}
      onEndEditing={() => setEmail(email.trim(), 'email')}
    />
    <Input
      type="password"
      value={password}
      onChangeText={value => setPassword(value)}
      placeholder="Password"
      property="password"
      passwordMask={passwordMask}
      onTogglePasswordMask={() => setPasswordMask(!passwordMask)}
      maxLength={30}
    />
  </View>
);

export default LoginForm;
