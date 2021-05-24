import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WelcomeScreen;
