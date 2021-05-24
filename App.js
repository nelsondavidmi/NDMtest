import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon3 from 'react-native-vector-icons/FontAwesome';

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

const Tab = createBottomTabNavigator();
const Welcome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        activeTintColor: '#f8f8fc',
        activeBackgroundColor: '#1fc29d',
        style: {
          backgroundColor: '#262e33',
        },
      }}>
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon3 name="map-marker" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon3 name="history" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon3 name="history" color={color} size={20} />
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

export default App;
