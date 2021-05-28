// @vendors
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// @theme
import {PRIMARY_COLOR, GRADIENT} from '../../theme/general';

// @constants
import {PRIMARY_BUTTON} from '../../constants/constants';

// @components
import styles from './styles';

const Button = ({
  children,
  disabled,
  text,
  onPress,
  type,
  fetching,
  viewGeneral,
  customStyleContainer,
  customStyleLabel,
}) => {
  const styleDisabled = ['#a4a4a4', '#a4a4a4'];
  const isPrimaryButton = type === PRIMARY_BUTTON;
  const buttonStyles = {
    primaryButton: {
      backgroundColor: PRIMARY_COLOR,
    },
    secondaryButton: {
      borderColor: PRIMARY_COLOR,
      borderWidth: 2,
    },
    secondaryTextButton: {
      color: 'white',
    },
  };

  return isPrimaryButton ? (
    <TouchableOpacity
      disabled={disabled || fetching}
      onPress={() => onPress()}
      testID="primaryButton">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={disabled ? styleDisabled : GRADIENT}
        style={[styles.genericButton, customStyleContainer]}>
        {fetching ? (
          <ActivityIndicator color="white" size="large" />
        ) : text ? (
          <Text style={styles.regularText}>{text}</Text>
        ) : (
          viewGeneral
        )}
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.genericButton,
        buttonStyles.secondaryButton,
        {width: 300},
        disabled && styles.disabled,
        customStyleContainer,
      ]}
      onPress={() => onPress()}>
      {children || (
        <Text
          style={[
            styles.regularText,
            buttonStyles.secondaryTextButton,
            customStyleLabel,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
