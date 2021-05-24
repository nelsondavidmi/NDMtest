// @vendors
import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {PRIMARY_COLOR} from '../../theme/general';
import {isEmpty} from 'lodash';

// @components
import styles from './styles';

// @assets
const arrowBack = require('../../assets/svg/arrowBack');

const TopBar = ({
  title,
  goBack,
  color,
  transparent,
  buttonLeft = {
    icon: String,
    onPress: Function,
    height: Number,
    width: Number,
    color: String,
  },
  buttonRight = {
    icon: String,
    iconText: String,
    onPress: Function,
    text: String,
    color: String,
  },
}) => {
  const renderLeft = () => {
    let content = null;
    if (goBack) {
      content = (
        <TouchableOpacity
          onPress={goBack}
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
          <SvgUri
            height={20}
            width={20}
            fill="#FFFFFF"
            svgXmlData={arrowBack}
          />
        </TouchableOpacity>
      );
    } else if (!isEmpty(buttonLeft)) {
      content = (
        <TouchableOpacity
          onPress={buttonLeft.onPress}
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
          <SvgUri
            height={buttonLeft.height || 20}
            width={buttonLeft.width || 20}
            fill={!transparent ? PRIMARY_COLOR : '#FFFFFF'}
            svgXmlData={buttonLeft.icon}
          />
        </TouchableOpacity>
      );
    }
    return content;
  };

  const renderRight = () => {
    let content = null;

    if (!isEmpty(buttonRight)) {
      content = (
        <TouchableOpacity
          onPress={buttonRight.onPress}
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
          {!buttonRight.text ? (
            <View style={styles.alignRight}>
              <SvgUri
                height={25}
                width={25}
                svgXmlData={buttonRight.icon}
                fill={buttonRight.color}
              />
              {buttonRight.iconText && (
                <Text style={styles.iconText}>{buttonRight.iconText}</Text>
              )}
            </View>
          ) : (
            <Text
              style={[
                styles.textRight,
                buttonRight.color && {color: buttonRight.color},
              ]}>
              {buttonRight.text}
            </Text>
          )}
        </TouchableOpacity>
      );
    }
    return content;
  };

  return (
    <SafeAreaView>
      <View
        style={
          !transparent
            ? [
                styles.container,
                styles.containerWithShadow,
                color && {backgroundColor: `${color}`},
              ]
            : styles.containerTransparent
        }>
        <View style={styles.containerRow}>
          {renderLeft(buttonLeft)}
          <Text
            style={
              transparent
                ? styles.titleWhite
                : color
                ? styles.titleWhite
                : styles.title
            }>
            {title}
          </Text>
        </View>
        {renderRight(buttonRight)}
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
