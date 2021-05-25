import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import Video from 'react-native-video';

// @components
import Button from '../components/button';
import {PRIMARY_BUTTON, SECONDARY_BUTTON} from '../constants/constants';

// @assets
const demo = require('../assets/animations/demoBlur.mp4');
const appLogo = require('../assets/ndmTitle.png');

// @dimensions
const {height} = Dimensions.get('window');

// @theme
import {PRIMARY_FONT, PRIMARY_FONT_MEDIUM} from '../theme/general';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Video
        source={demo}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <Image source={appLogo} style={styles.loadingImage} />
      <Text style={styles.title}>
        JOIN TO THIS TEST. THIS TEST IS FOR NUBIERA
      </Text>
      <Text style={styles.subtitle}>DO YOU WANT TO BELONG TO THIS GROUP?</Text>
      <View style={styles.marginButton}>
        <Button
          text="CREATE ACCOUNT"
          type={PRIMARY_BUTTON}
          customStyleContainer={styles.button}
          onPress={() => navigation.navigate('Signup')}
        />
        <Button
          text="LOGIN"
          type={SECONDARY_BUTTON}
          customStyleContainer={styles.button}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  title: {
    fontFamily: PRIMARY_FONT_MEDIUM,
    color: '#FFFFFF',
    fontSize: 32,
    marginTop: 90,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: PRIMARY_FONT,
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 30,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  loadingImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    marginVertical: 5,
  },
  marginButton: {
    marginTop: 80,
  },
});
export default HomeScreen;
