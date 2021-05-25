import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
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

const LoginScreen = ({navigation}) => {
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
              <LoginForm />
            </View>
            <View style={styles.button}>
              <Button
                text="LOG IN"
                type={PRIMARY_BUTTON}
                onPress={() => navigation.navigate('Welcome')}
                isBottom
              />
            </View>
            <TouchableOpacity
              style={styles.goToLogin}
              onPress={() => navigation.navigate('Singup')}>
              <Text style={styles.textCheck}>
                Do you want to create and account?
              </Text>
            </TouchableOpacity>
            <View style={styles.scrollBottom} />
          </View>
        </ScrollView>
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
  textTermsColor: {
    fontFamily: PRIMARY_FONT,
    color: PRIMARY_COLOR,
    textDecorationLine: 'underline',
    fontSize: 13,
    marginRight: 4,
  },
  textInstachef: {
    fontFamily: PRIMARY_FONT,
    color: PRIMARY_COLOR,
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
});

export default LoginScreen;
