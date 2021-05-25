import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

//@components
import Input from '../components/input';
import Button from '../components/button';

// @theme
import {PRIMARY_COLOR, PRIMARY_FONT_MEDIUM} from '../theme/general';
import {PRIMARY_BUTTON} from '../constants/constants';

//@assets
const profile = require('../assets/profile.png');

const AccountScreen = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBlue}>
        <Text style={styles.name}>Maria Fernanda Rubio Santander</Text>
        <Image source={profile} style={styles.imageProfile} />
        <TouchableOpacity
          style={styles.changeButton}
          hitSlop={{top: 100, bottom: 100, right: 100, left: 100}}
          onPress={() => Alert.alert('Comming Soon')}>
          <Icon name="pencil" color="#000" size={25} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.card}>
        <Input
          placeholder="First Name"
          value={name}
          onChangeText={value => setName(value)}
          editable={false}
        />
        <Input
          placeholder="Last name"
          value={firstName}
          onChangeText={value => setFirstName(value)}
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
        type={PRIMARY_BUTTON}
        customStyleContainer={styles.button}
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
    resizeMode: 'contain',
    width: 150,
    height: 150,
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
    marginTop: 100,
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
