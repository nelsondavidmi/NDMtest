import React from 'react';
import {shallow} from 'enzyme';
import ImageSelector from './index';

const mockOnCancelImage = jest.fn();
const mockOnChooseImage = jest.fn();

describe('ImageSelector', () => {
  const props = {
    imageURI:
      'https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190121-ESTOS-SON-LOS-COLORES-DE-CARRO-M%C3%81S-VENDIDOS-EN-2018-01.jpg',
    imageIsFetching: true,
    label: 'test',
    onCancelImage: mockOnCancelImage,
    onChooseImage: mockOnChooseImage,
    image: '',
  };
  describe('ImageSelector', () => {
    it('should match to snapshot', () => {
      const component = shallow(<ImageSelector {...props} />);
      expect(component).toMatchSnapshot();
    });
    it('should be loading', () => {
      const component = shallow(<ImageSelector {...props} />);
      const activity = component.find('ActivityIndicator');

      expect(activity.length).toBe(1);
    });
    it('Should run onChooseImage', () => {
      const component = shallow(<ImageSelector {...props} />);
      component.setProps({
        imageIsFetching: false,
        imageURI: '',
      });
      const onChooseImage = component.find({testID: 'onChooseImage'});

      onChooseImage.simulate('press');
      expect(mockOnChooseImage).toHaveBeenCalled();
    });
  });
});
