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
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    zIndex: 1000,
  },
  closeContainer: {
    left: 120,
    borderRadius: 100,
    padding: 5,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    top: 10,
    zIndex: 10,
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
    marginTop: 15,
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
