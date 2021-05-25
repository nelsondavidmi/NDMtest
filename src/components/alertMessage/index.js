// @vendors
import React from 'react';
import {View, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';

// @theme
import {PRIMARY_COLOR} from '../../theme/general';

// @styles
import styles from './styles';

// @assets
const infoEmoticon = require('../../assets/svg/warning');

const AlertMessage = ({message, show, style}) => {
  const renderIcon = () => {
    return <SvgUri height={20} width={20} svgXmlData={infoEmoticon} />;
  };

  return (
    <>
      {show ? (
        <View style={[styles.container]}>
          {renderIcon()}
          <Text style={[styles.textWarning, style]}>{message}</Text>
        </View>
      ) : null}
    </>
  );
};

export default AlertMessage;
