import {Platform, StyleSheet} from 'react-native';

// @theme
import { PRIMARY_FONT_MEDIUM } from '../../theme/general';

const styles = StyleSheet.create({
  genericButton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 300,
    height: Platform.OS === 'android' ? 45 : 'auto',
  },
  regularText: {
    color: 'white',
    fontFamily: PRIMARY_FONT_MEDIUM,
    letterSpacing: 3,
  },
  primaryTextButton: {
    color: 'white',
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
  disabled: {
    backgroundColor: '#9c9c9c',
  },
});

export default styles;
