import { Platform, StyleSheet } from 'react-native';

// @resolutions
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// @style
import {
  PRIMARY_FONT,
  PRIMARY_COLOR,
} from '../../../../../../app/styles/theme';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? 80 : 70,
    paddingTop: Platform.OS === 'android' ? 15 : 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  iconText: {
    textAlign:'center',
    fontSize:9,
    fontFamily: PRIMARY_FONT,
  },
  alignRight: {
    alignSelf:'center',
    alignItems: 'center',
  },
  containerTransparent: {
    flexDirection: 'row',
    paddingTop: 15,
    position: 'absolute',
    height: 80,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  containerWithShadow: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,
elevation: 5,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 12,
    maxHeight: hp('7%'),
    maxWidth: wp('57%'),
    fontFamily: PRIMARY_FONT,
    fontSize: 16,
    alignSelf: 'center',
  },
  titleWhite: {
    marginLeft: 12,
    maxHeight: hp('7%'),
    maxWidth: wp('57%'),
    fontFamily: PRIMARY_FONT,
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
  },
  textRight: {
    fontFamily: PRIMARY_FONT,
    color: PRIMARY_COLOR,
  },
});

export default styles;
