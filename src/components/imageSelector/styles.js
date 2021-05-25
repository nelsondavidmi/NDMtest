import {StyleSheet} from 'react-native';

// @theme
import {PRIMARY_FONT, PRIMARY_COLOR} from '../../theme/general';

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    alignSelf: 'center',
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    backgroundColor: 'white',
  },
  closeIcon: {
    width: 15,
    height: 15,
    zIndex: 1000,
  },
  closeContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    left: 80,
    zIndex: 10,
    flexDirection: 'row',
  },
  textImage: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontFamily: PRIMARY_FONT,
    textAlign: 'center',
  },
  containerImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    backgroundColor: 'white',
  },
  emptyImage: {
    width: 120,
    height: 70,
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default styles;
