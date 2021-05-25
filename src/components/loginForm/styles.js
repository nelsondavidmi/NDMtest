import { StyleSheet } from 'react-native';

//resolutions
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  input: {
    padding: 15,
    backgroundColor: '#f3f3f3',
    color: '#9c9c9c',
    marginTop: 20,
    borderColor: '#9c9c9c',
    borderRadius: 4,
    borderWidth: 0.5,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#f3f3f3',
    color: '#9c9c9c',
    borderColor: '#9c9c9c',
    borderRadius: 4,
    borderWidth: 0.5,
  },
  iconPassword: {
    width: hp('20%'),
    height: wp('20%'),
  },
  errorText: {
    marginVertical: 15,
    color: 'red',
  },
});

export default styles;
