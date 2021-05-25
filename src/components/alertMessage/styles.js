import {StyleSheet} from 'react-native';

//resolutions
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// @Theme
import {PRIMARY_FONT} from '../../theme/general';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    padding: hp('3%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  textWarning: {
    fontFamily: PRIMARY_FONT,
    color: '#cc3300',
    marginLeft: 10,
  },
});

export default styles;
