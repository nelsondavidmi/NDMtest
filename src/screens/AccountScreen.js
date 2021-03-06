import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

//@components
import Input from '../components/input';
import Button from '../components/button';
import LoaderAnimation from '../components/loaderAnimation';
import ImageSelector from '../components/imageSelector';
import ImagePicker from 'react-native-image-picker';

// @theme
import {PRIMARY_COLOR, PRIMARY_FONT_MEDIUM} from '../theme/general';
import {PRIMARY_BUTTON, IMAGE_PICKER_OPTIONS} from '../constants/constants';

// //@assets
// const profile = require('../assets/profile.png');
const loading = require('../assets/animations/loading.json');

const AccountScreen = ({user, fetchSignup}) => {
  const [firstName, setFirstName] = useState(user && user.first_name);
  const [lastName, setLastName] = useState(user && user.last_name);
  const [phone, setPhone] = useState(user && user.phone);
  const [email, setEmail] = useState(user && user.email);
  const [image, setImage] = useState(user && user.image);
  const [animation, setAnimation] = useState(false);

  const formData = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    image,
  };

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

  const onChange = () => {
    fetchSignup(formData);
    setAnimation(true);
    setTimeout(() => setAnimation(false), 4000);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBlue}>
        <Text style={styles.name}>
          {user && user.first_name} {user && user.last_name}
        </Text>
        <ImageSelector
          image={image}
          onChooseImage={() => handlePicture()}
          onCancelImage={() => setImage(null)}
        />
      </View>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.card}>
        <Input
          placeholder="First Name"
          value={firstName}
          onChangeText={value => setFirstName(value)}
          editable={false}
        />
        <Input
          placeholder="Last name"
          value={lastName}
          onChangeText={value => setLastName(value)}
          editable={false}
        />
        <Input
          type="phone"
          placeholder="Phone"
          maxLength={10}
          value={phone}
          onChangeText={value => setPhone(value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
          editable={false}
        />
      </View>
      <Button
        text="SAVE CHANGES"
        onPress={() => onChange()}
        type={PRIMARY_BUTTON}
        customStyleContainer={styles.button}
      />
      <LoaderAnimation
        animationType="fade"
        animationImage={loading}
        height={250}
        width={250}
        modalVisible={animation}
        message="Change the information"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBlue: {
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    height: 150,
  },
  imageProfile: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
    borderRadius: 100,
    top: 15,
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
  },
  changeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 29,
    height: 28,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 1000,
    left: 30,
    bottom: 10,
  },
  name: {
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontSize: 22,
    marginTop: 40,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  title: {
    paddingHorizontal: 30,
    fontSize: 16,
    fontFamily: PRIMARY_FONT_MEDIUM,
    color: PRIMARY_COLOR,
    marginTop: 80,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    marginTop: 10,
    textAlignVertical: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
export default AccountScreen;
