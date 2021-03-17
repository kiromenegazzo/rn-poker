import { StyleSheet } from 'react-native';

import { greenColor, greenDarkColor } from './constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: greenDarkColor,
  },
  text: {
    textAlign: 'center',
    color: greenDarkColor,
  },
  status: {
    backgroundColor: greenColor,
  },
});
