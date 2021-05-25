import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

//@components
import Input from '../components/input';

// @theme
import {PRIMARY_COLOR, PRIMARY_FONT_MEDIUM} from '../theme/general';

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
        <TouchableOpacity onPress={{}}>
          <Image source={profile} style={styles.imageProfile} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Información personal</Text>
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
    marginTop: 20,
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
