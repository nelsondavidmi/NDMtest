// @vendors
import {StyleSheet} from 'react-native';

// @theme
import {PRIMARY_FONT_LIGHT, PRIMARY_FONT} from '../../theme/general';

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    fontFamily: PRIMARY_FONT_LIGHT,
  },
  marginGeneral: {
    marginTop: 10,
  },
  textDescription: {
    fontFamily: PRIMARY_FONT_LIGHT,
    fontSize: 14,
    color: '#727272',
  },
  inputArea: {
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    textAlign: 'justify',
    fontFamily: PRIMARY_FONT,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 0.5,
  },
  inputPassword: {
    flexGrow: 4,
    paddingVertical: 0,
    fontFamily: PRIMARY_FONT_LIGHT,
  },
  iconPassword: {
    width: 20,
    height: 20,
  },
  phoneInput: {
    paddingLeft: 15,
  },
  warningText: {
    color: '#C20000',
    fontFamily: PRIMARY_FONT,
    fontSize: 12,
    alignSelf: 'center',
  },
  countryCode: {
    marginLeft: 10,
    alignSelf: 'center',
    fontFamily: PRIMARY_FONT_LIGHT,
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  directionWarning: {
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 3,
  },
  directionCode: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  separator: {
    borderLeftColor: 'lightgray',
    borderLeftWidth: 0.6,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  warningView: {
    alignSelf: 'center',
    marginRight: 5,
  },
  viewPhone: {
    alignSelf: 'center',
    flexGrow: 5,
  },
  center: {
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
    alignSelf: 'center',
    width: '70%',
    height: '60%',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchContainerIos: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
    paddingVertical: 5,
    alignSelf: 'center',
    alignContent: 'center',
    width: '70%',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});

export default styles;
