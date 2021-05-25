// @vendors
import React from 'react';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// @styles
import styles from './styles';

// @assets
const {width} = Dimensions.get('window');

const Carrousel = ({data, onSelectBusiness}) => {
  const [activeSlide, onChangeItemActive] = React.useState(0);
  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        dotContainerStyle={styles.containerDots}
        activeDotIndex={activeSlide}
        containerStyle={styles.container}
        dotStyle={styles.dots}
        inactiveDotStyle={styles.dotsInactive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.9}
      />
    );
  };

  const renderItem = ({item: img, index}) => {
    return (
      <TouchableOpacity
        hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}
        key={index}
        onPress={() => {}}>
        <Image source={img.image} style={styles.image} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 60}
        onSnapToItem={index => onChangeItemActive(index)}
      />
    </View>
  );
};

export default Carrousel;
