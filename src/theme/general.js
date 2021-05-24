import {Platform} from 'react-native';

export const PRIMARY_FONT =
  Platform.OS === 'android' ? 'AirbnbCerealBook' : 'Arial';
export const PRIMARY_FONT_MEDIUM =
  Platform.OS === 'android' ? 'AirbnbCerealMedium' : 'Arial';
export const PRIMARY_FONT_LIGHT =
  Platform.OS === 'android' ? 'AirbnbCerealLight' : 'Arial';
export const PRIMARY_COLOR = '#3E5F8A';
export const GRADIENT = ['#5085CB', '#8DACD6'];
