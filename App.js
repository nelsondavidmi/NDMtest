import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

// @Screens
import LoadingScreen from './src/screens/LoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// @TabScreens
import WelcomeScreen from './src/screens/WelcomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import HelpScreen from './src/screens/HelpScreen';

// @store
import store from './src/store';

// @theme
import {PRIMARY_COLOR, PRIMARY_FONT_MEDIUM} from './src/theme/general';

const Tab = createBottomTabNavigator();
const Welcome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        activeTintColor: '#f8f8fc',
        activeBackgroundColor: PRIMARY_COLOR,
        tabStyle: {
          borderRadius: 20,
        },
        style: {
          backgroundColor: '#262e33',
          borderRadius: 20,
          marginBottom: 25,
          marginHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={styles.center}>
              <Icon name="home" color={color} size={20} />
              <Text style={styles.textTab}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={styles.center}>
              <Icon name="user" color={color} size={20} />
              <Text style={styles.textTab}>ACCOUNT</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={styles.center}>
              <Icon name="help-circle" color={color} size={20} />
              <Text style={styles.textTab}>HELP</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  textTab: {
    fontFamily: PRIMARY_FONT_MEDIUM,
    color: '#FFFFFF',
    fontSize: 8,
  },
});

export default App;
