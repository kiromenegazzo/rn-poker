import { StyleSheet } from 'react-native';

import { greenDarkColor, whiteColor } from 'constants/colors';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '50%',
    height: '20%',
  },
  name: {
    width: 120,
    paddingVertical: 2,
    paddingHorizontal: 8,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: greenDarkColor,
    color: whiteColor,
  },
});
