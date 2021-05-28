import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

// theme
import {
  PRIMARY_FONT,
  PRIMARY_FONT_LIGHT,
  PRIMARY_COLOR,
} from '../theme/general';

// @constants
import {PRIMARY_BUTTON} from '../constants/constants';

// @components
import LoginForm from '../components/loginForm';
import TopBar from '../components/topbar';
import Button from '../components/button';
import LoaderAnimation from '../components/loaderAnimation';

// @assets
const loading = require('../assets/animations/loading.json');
const profile = require('../assets/profile_empty.jpeg');

const LoginScreen = ({navigation, fetchSignup}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordMask, setPasswordMask] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [alert, setAlert] = useState(false);

  const arrayInfo = require('../../db.json');

  let emailSearch = arrayInfo.user.filter(item => item.email === `${email}`);

  const goTo = () => {
    setAnimation(false);
    navigation.navigate('Welcome');
  };

  const goToWelcome = () => {
    setAlert(false);
    setAnimation(true);
    fetchSignup(emailSearch[0]);
    setTimeout(goTo, 6000);
  };

  const onLogin = () => {
    emailSearch && emailSearch[0] && emailSearch[0].password === `${password}`
      ? goToWelcome()
      : setAlert(true);
    setEmail(null);
    setPassword('');
    Keyboard.dismiss();
  };

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <StatusBar translucent barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        backgroundColor="white">
        <TopBar title="LOGIN IN" goBack={() => navigation.goBack()} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.mainContainer}>
            <View style={styles.sectionForm}>
              <Image
                source={emailSearch[0] ? emailSearch[0].image : profile}
                style={styles.imageProfile}
              />
              <LoginForm
                {...{
                  email,
                  setEmail,
                  password,
                  setPassword,
                  passwordMask,
                  setPasswordMask,
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                text="LOG IN"
                type={PRIMARY_BUTTON}
                onPress={() => onLogin()}
                disabled={!(email && password)}
              />
            </View>
            {alert && (
              <Text style={styles.wrongText}>
                incorrect account or password.
              </Text>
            )}
            <TouchableOpacity
              style={styles.goToLogin}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.textCheck}>
                Do you want to create and account?
              </Text>
            </TouchableOpacity>
            <View style={styles.scrollBottom} />
          </View>
        </ScrollView>
        <LoaderAnimation
          animationType="fade"
          animationImage={loading}
          height={250}
          width={250}
          modalVisible={animation}
          message="Loading"
        />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerScroll: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  marginSupport: {
    marginBottom: 30,
  },
  bold: {
    fontFamily: PRIMARY_FONT,
  },
  primaryText: {
    fontFamily: PRIMARY_FONT_LIGHT,
    textAlign: 'center',
  },
  sectionForm: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  textInfo: {
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  button: {
    marginVertical: 20,
  },
  goToLogin: {
    paddingBottom: 10,
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    alignSelf: 'center',
    paddingBottom: 10,
  },
  scrollBottom: {
    height: 50,
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  checkBox: {
    paddingRight: 2,
    alignSelf: 'center',
  },
  textTerms: {
    fontFamily: PRIMARY_FONT,
    fontSize: 13,
    marginRight: 4,
  },
  imageProfile: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
    borderRadius: 100,
    top: 15,
    alignSelf: 'center',
  },
  textTermsColor: {
    fontFamily: PRIMARY_FONT,
    color: PRIMARY_COLOR,
    textDecorationLine: 'underline',
    fontSize: 13,
    marginRight: 4,
  },
  textCheck: {
    fontFamily: PRIMARY_FONT,
    textAlign: 'center',
    color: PRIMARY_COLOR,
    marginTop: 10,
  },
  containerTerms: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerTerms2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: Platform.OS === 'ios' ? '#CFCECE' : 'transparent',
  },
  wrongText: {
    color: 'red',
    fontFamily: PRIMARY_FONT,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default LoginScreen;
