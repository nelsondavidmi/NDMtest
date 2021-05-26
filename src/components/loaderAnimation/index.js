// @vendors
import React from 'react';
import {Text, View, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

// @styles
import styles from './styles';

const LoaderAnimation = ({
  animationType,
  message,
  modalVisible,
  animationImage,
  height,
  width,
}) => {
  return (
    <Modal animationType={animationType} transparent visible={modalVisible}>
      <View style={styles.wrapper}>
        <View style={styles.loaderContainer}>
          <LottieView
            source={animationImage}
            resizeMode="cover"
            style={{height: height, width: width}}
            autoPlay
            loop
          />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoaderAnimation;
