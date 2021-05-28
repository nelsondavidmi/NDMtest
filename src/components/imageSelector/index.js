// @vendors
import React from 'react';
import {ActivityIndicator, View, TouchableOpacity, Image} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/Feather';

// assets
const imageEmpty = require('../../assets/svg/imageEmpty');

// @styles
import styles from './styles';
import {PRIMARY_COLOR} from '../../theme/general';

const ImageSelector = ({
  image,
  imageURI,
  imageIsFetching,
  label,
  onCancelImage,
  onChooseImage,
}) => (
  <View>
    {(image || !!imageURI) && (
      <>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => onCancelImage()}
          testID="onCancelImage">
          <Icon name="edit-2" color="#000" size={25} />
        </TouchableOpacity>
        <Image source={{uri: imageURI || image.uri}} style={styles.image} />
      </>
    )}
    {imageIsFetching && <ActivityIndicator color="tomato" />}
    {!imageIsFetching && !image && !imageURI && (
      <TouchableOpacity
        style={styles.containerImage}
        onPress={() => onChooseImage()}
        testID="onChooseImage">
        <SvgUri
          svgXmlData={imageEmpty}
          height={60}
          width={60}
          fill={PRIMARY_COLOR}
        />
      </TouchableOpacity>
    )}
  </View>
);

export default ImageSelector;
