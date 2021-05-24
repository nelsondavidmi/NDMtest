// @vendors
import React from 'react';

// @components
import Input from '../input';

const SignupForm = ({
  confirmPassword,
  confirmPasswordMask,
  email,
  firstname,
  lastname,
  password,
  passwordMask,
  phone,
  onChangeField,
  onTogglePasswordMask,
  onTogglePasswordTwoMask,
}) => (
  <>
    <Input
      value={firstname}
      onChangeText={value => onChangeField(value, 'firstname')}
      placeholder="First Name"
      maxLength={40}
    />
    <Input
      value={lastname}
      onChangeText={value => onChangeField(value, 'lastname')}
      placeholder="Last Name"
      maxLength={50}
    />
    <Input
      value={email}
      onChangeText={value => onChangeField(value.trim(), 'email')}
      placeholder="Email"
      maxLength={60}
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
    <Input
      type="password"
      value={confirmPassword}
      onChangeText={value => onChangeField(value, 'confirmPassword')}
      placeholder="Confirm password"
      property="password"
      passwordMask={confirmPasswordMask}
      onTogglePasswordMask={onTogglePasswordTwoMask}
      maxLength={30}
    />
    <Input
      type="phone"
      value={phone}
      onChangeText={value => onChangeField(value, 'phone')}
      property="phone"
      placeholder="Phone"
      maxLength={10}
    />
  </>
);

export default SignupForm;
