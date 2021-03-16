import { StyleSheet } from 'react-native';

import { secondaryColor } from '../../constants/colors';

export const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    color: secondaryColor,
  },
});
