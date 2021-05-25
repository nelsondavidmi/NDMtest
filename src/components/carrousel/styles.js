import {Dimensions, StyleSheet} from 'react-native';

// @theme
import {PRIMARY_FONT_BOLD, PRIMARY_COLOR} from '../../theme/general';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerDots: {},
  dots: {
    width: 20,
    height: 5,
    borderRadius: 3,
    marginHorizontal: 0.2,
    backgroundColor: PRIMARY_COLOR,
  },
  dotsInactive: {
    backgroundColor: 'grey',
  },
  image: {
    borderRadius: 13,
    width: width - 60,
    height: 140,
    backgroundColor: '#FFFFFF',
  },
  happyHourImage: {
    position: 'absolute',
    elevation: 5,
    width: 60,
    height: 60,
    right: 15,
    top: 70,
  },
  carouselContainer: {
    paddingVertical: 10,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontFamily: PRIMARY_FONT_BOLD,
    paddingHorizontal: 15,
    marginTop: -20,
    marginBottom: -5,
  },
});

export default styles;
