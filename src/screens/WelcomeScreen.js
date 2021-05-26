import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// @theme
import {
  PRIMARY_COLOR,
  PRIMARY_FONT,
  PRIMARY_FONT_MEDIUM,
} from '../theme/general';

//@components
import Carrousel from '../components/carrousel/Carrousel';

//@assets
const image1 = require('../assets/c1.png');
const image2 = require('../assets/c2.png');
const image3 = require('../assets/c3.png');
const image4 = require('../assets/c4.png');
const explain = require('../assets/explain.png');

const data = [
  {id: 1, image: image1},
  {id: 2, image: image2},
  {id: 3, image: image3},
  {id: 4, image: image4},
];

const WelcomeScreen = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBlue}>
        <View style={styles.containerRow}>
          <TouchableOpacity
            style={styles.buttonLogOut}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="exit-outline" color="#FFFFFF" size={25} />
            <Text style={styles.logOutText}>LOG OUT</Text>
          </TouchableOpacity>
          <Text style={styles.textName}>Welcome {user && user.first_name}</Text>
        </View>
        <Carrousel data={data} />
        {console.log(user)}
      </View>
      <Image source={explain} style={styles.image} />
      <Text style={styles.featuresText}>New features comming soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  featuresText: {
    fontFamily: PRIMARY_FONT,
    textAlign: 'center',
  },
  textName: {
    color: '#FFFFFF',
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontSize: 24,
  },
  logOutText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
  image: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  containerBlue: {
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
  },
  buttonLogOut: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
export default WelcomeScreen;
