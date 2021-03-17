import { StyleSheet } from 'react-native';

import { greenDarkColor } from '../../constants/colors';

export const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    color: greenDarkColor,
  },
});
