// @vendors
import React from 'react';
import {StyleSheet} from 'react-native';

// @components
import Input from '../input';
import ImageSelector from '../imageSelector';
import ImagePicker from 'react-native-image-picker';

// @constants
import {IMAGE_PICKER_OPTIONS} from '../../constants/constants';

const SignupForm = ({
  confirmPassword,
  setConfirmPassword,
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  password,
  setPassword,
  passwordMask,
  passwordMask2,
  phone,
  setPhone,
  image,
  setImage,
  onTogglePasswordMask,
  onTogglePasswordMask2,
}) => {
  const handlePicture = () => {
    ImagePicker.showImagePicker(IMAGE_PICKER_OPTIONS, response => {
      setImage(false);
      if (response.uri) {
        setImage(response);
      }
      if (response.didCancel) {
        setImage(null);
      }
    });
  };
  return (
    <>
      <ImageSelector
        image={image}
        onChooseImage={() => handlePicture()}
        onCancelImage={() => setImage(null)}
      />
      <Input
        value={firstName}
        onChangeText={value => setFirstName(value)}
        placeholder="First Name"
        maxLength={40}
      />
      <Input
        value={lastName}
        onChangeText={value => setLastName(value)}
        placeholder="Last Name"
        maxLength={50}
      />
      <Input
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="Email"
        maxLength={60}
      />
      <Input
        type="password"
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder="Password"
        property="password"
        passwordMask={passwordMask}
        onTogglePasswordMask={onTogglePasswordMask}
        maxLength={30}
      />
      <Input
        type="password"
        value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
        placeholder="Confirm password"
        property="password"
        passwordMask={passwordMask2}
        onTogglePasswordMask={onTogglePasswordMask2}
        maxLength={30}
      />
      <Input
        type="phone"
        value={phone}
        onChangeText={value => setPhone(value)}
        property="phone"
        placeholder="Phone"
        maxLength={10}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 120,
    height: 110,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default SignupForm;
