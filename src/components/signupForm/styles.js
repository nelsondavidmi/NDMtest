import { StyleSheet } from 'react-native';

//resolutions
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f3f3f3',
    color: '#9c9c9c',
    marginTop: 20,
    borderColor: '#9c9c9c',
    borderRadius: 4,
    borderWidth: wp('0.5%'),
    margin: 0,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#f3f3f3',
    color: '#9c9c9c',
    borderColor: '#9c9c9c',
    borderRadius: 4,
    borderWidth: 0.5,
    margin: 0,
  },
  inputPassword: {
    paddingVertical: 10,
    flexGrow: 4,
  },
  iconPassword: {
    width: wp('20%'),
    height: hp('20%'),
  },
});

export default styles;
