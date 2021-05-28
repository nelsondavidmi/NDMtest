import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';

const mockOnpress = jest.fn();

describe('Button', () => {
  const props = {
    disabled: true,
    text: 'hello',
    onPress: mockOnpress,
    type: 'PRIMARY_BUTTON',
    fetching: true,
  };
  describe('Button', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button {...props} />);
      expect(component).toMatchSnapshot();
    });
    it('should be loading', () => {
      const component = shallow(<Button {...props} />);
      const activity = component.find('ActivityIndicator');

      expect(activity.length).toBe(1);
    });
    it('Should not be render loading', () => {
      const component = shallow(<Button {...props} />);
      component.setProps({fetching: false});
      const activity = component.find('ActivityIndicator');

      expect(activity.length).toBe(0);
    });
    it('Should be render primary button', () => {
      const component = shallow(<Button {...props} />);
      const primaryButton = component.find({testID: 'primaryButton'});
      expect(primaryButton.length).toBe(1);
    });
    it('Should run onPress', () => {
      const component = shallow(<Button {...props} />);
      const primaryButton = component.find({testID: 'primaryButton'});
      primaryButton.simulate('press');
      expect(mockOnpress).toHaveBeenCalled();
    });
  });
});
