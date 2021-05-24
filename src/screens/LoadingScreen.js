import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';

// @assets
const appLogo = require('../assets/ndmTitle.png');

// @constants
import {PRIMARY_COLOR} from '../theme/general';

const LoadingScreen = ({navigation}) => {
  const getSession = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    setTimeout(getSession, 3000);
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
