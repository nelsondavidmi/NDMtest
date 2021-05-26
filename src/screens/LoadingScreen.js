import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// @assets
const appLogo = require('../assets/ndmTitle.png');

// @constants
import {PRIMARY_COLOR} from '../theme/general';

const LoadingScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const getId = async () => {
    const idValue = await AsyncStorage.getItem('id');
    setId(idValue);
    console.log(id, 'este es');
  };
  const getSession = () => {
    id ? navigation.navigate('Welcome') : navigation.navigate('Home');
  };

  useEffect(() => {
    getId();
    setTimeout(getSession, 6000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <Image source={appLogo} style={styles.loadingImage} />
        <ActivityIndicator color="#FFFFFF" size="large" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
export default LoadingScreen;
