import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    position: 'relative',
    left: '50%',
    marginLeft: -35,
    top: '50%',
    marginTop: -35,
  },
  message: {
    color: 'white',
  },
});

export default styles;
