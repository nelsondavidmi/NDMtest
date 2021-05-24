// @vendors
import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
  Text,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import SvgUri from 'react-native-svg-uri';

// @styles
import styles from './styles';
import {PRIMARY_COLOR} from '../../theme/general';

// @assets
const eye = require('../../assets/eyeActive.png');
const eyeInactive = require('../../assets/eyeInactive.png');
const flag = require('../../assets/svg/colombiaFlag');
const warning = require('../../assets/svg/warning');

const Input = ({
  type = '',
  value,
  onChangeText,
  property = '',
  customStyle = {},
  placeholder,
  passwordMask,
  onTogglePasswordMask,
  onFocus,
  placeholderUp,
  keyboardType,
  onEndEditing,
  focus,
  validator,
  maxLength,
}) => {
  const commonPropsInput = {
    underlineColorAndroid: 'transparent',
    selectionColor: PRIMARY_COLOR,
    autoCapitalize: 'none',
  };

  const formatDecimalOptions = {
    precision: 3,
    separator: ',',
    delimiter: '.',
    unit: '$',
  };

  const warningStyle = {borderBottomColor: 'red', borderBottomWidth: 0.5};
  const warningStatus = validator && validator.value && warningStyle;
  const onChangePrice = value => {
    if (value.length < 8) {
      onChangeText(value, property);
    }
  };

  let content = (
    <View style={styles.marginGeneral}>
      {value ? (
        <Text style={styles.textDescription}>{placeholder}</Text>
      ) : (
        <Text>{''}</Text>
      )}
      <TextInput
        {...commonPropsInput}
        style={[
          styles.input,
          customStyle,
          warningStatus,
          focus && warningStyle,
        ]}
        value={value}
        onChangeText={value => onChangeText(value, property)}
        placeholder={placeholder}
        onFocus={onFocus}
        keyboardType={keyboardType}
        onEndEditing={onEndEditing}
        maxLength={maxLength}
      />
      {!focus && !!warningStatus && (
        <View style={styles.directionWarning}>
          <View style={styles.warningView}>
            <SvgUri height={14} width={14} svgXmlData={warning} />
          </View>
          <Text style={styles.warningText}>{validator.value}</Text>
        </View>
      )}
      {focus && (
        <View style={styles.directionWarning}>
          <View style={styles.warningView}>
            <SvgUri height={14} width={14} svgXmlData={warning} />
          </View>
          <Text style={styles.warningText}>Campo obligatorio</Text>
        </View>
      )}
    </View>
  );

  switch (type) {
    case 'textarea': {
      return (
        <View style={styles.marginGeneral}>
          {value ? (
            <Text style={styles.textDescription}>
              {placeholderUp ? placeholderUp : placeholder}
            </Text>
          ) : (
            <Text>{''}</Text>
          )}
          <TextInput
            {...commonPropsInput}
            style={[styles.inputArea, customStyle, warningStatus]}
            value={value}
            onChangeText={value => onChangeText(value, property)}
            placeholder={placeholder}
            multiline={true}
            numberOfLines={4}
            maxLength={maxLength}
          />
        </View>
      );
    }
    case 'password': {
      return (
        <View style={styles.marginGeneral}>
          {value ? (
            <Text style={styles.textDescription}>{placeholder}</Text>
          ) : (
            <Text>{''}</Text>
          )}
          <View
            style={[
              styles.inputPasswordContainer,
              warningStatus,
              focus && warningStyle,
            ]}>
            <TextInput
              {...commonPropsInput}
              style={[styles.inputPassword]}
              value={value}
              onChangeText={value => onChangeText(value, property)}
              placeholder={placeholder}
              secureTextEntry={passwordMask}
              onFocus={onFocus}
              maxLength={maxLength}
              onEndEditing={onEndEditing}
            />
            <TouchableWithoutFeedback
              onPress={() => onTogglePasswordMask()}
              hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
              <Image
                source={passwordMask ? eyeInactive : eye}
                style={styles.iconPassword}
              />
            </TouchableWithoutFeedback>
          </View>
          {!focus && !!warningStatus && (
            <View style={styles.directionWarning}>
              <View style={styles.warningView}>
                <SvgUri height={14} width={14} svgXmlData={warning} />
              </View>
              <Text style={styles.warningText}>{validator.value}</Text>
            </View>
          )}
          {focus && (
            <View style={styles.directionWarning}>
              <View style={styles.warningView}>
                <SvgUri height={14} width={14} svgXmlData={warning} />
              </View>
              <Text style={styles.warningText}>Campo obligatorio</Text>
            </View>
          )}
        </View>
      );
    }
    case 'price': {
      return (
        <View style={styles.marginGeneral}>
          {value ? (
            <Text style={styles.textDescription}>{placeholder}</Text>
          ) : (
            <Text>{''}</Text>
          )}
          <TextInputMask
            {...commonPropsInput}
            style={[styles.input, styles.price, warningStatus]}
            placeholder={placeholder}
            type="money"
            options={formatDecimalOptions}
            value={value}
            onChangeText={value => onChangePrice(value)}
            onFocus={onFocus}
            onEndEditing={onEndEditing}
          />
        </View>
      );
    }
    case 'instaPrice': {
      return (
        <View style={styles.marginGeneral}>
          {value ? (
            <Text style={styles.textDescription}>{placeholder}</Text>
          ) : (
            <Text>{''}</Text>
          )}
          <TextInput
            {...commonPropsInput}
            style={[styles.input, styles.price, warningStatus]}
            placeholder={placeholder}
            value={value}
            keyboardType="numeric"
            onChangeText={value => onChangePrice(value)}
            onFocus={onFocus}
            onEndEditing={onEndEditing}
          />
        </View>
      );
    }
    case 'phone': {
      return (
        <View style={styles.direction}>
          <View style={styles.directionCode}>
            <View style={styles.center}>
              <SvgUri height={35} width={35} svgXmlData={flag} />
            </View>
            <Text style={styles.countryCode}>+57</Text>
            <View style={styles.separator} />
          </View>
          <View style={styles.viewPhone}>
            <TextInput
              {...commonPropsInput}
              style={[
                styles.input,
                customStyle,
                warningStatus,
                focus && warningStyle,
              ]}
              value={value}
              placeholder={placeholder}
              onChangeText={value => onChangeText(value, property)}
              onFocus={onFocus}
              maxLength={maxLength}
              keyboardType={'numeric'}
            />
            {!!warningStatus && (
              <View style={styles.directionWarning}>
                <View style={styles.warningView}>
                  <SvgUri height={14} width={14} svgXmlData={warning} />
                </View>
                <Text style={styles.warningText}>{validator.value}</Text>
              </View>
            )}
          </View>
        </View>
      );
    }
    default:
      return content;
  }
};

export default Input;
