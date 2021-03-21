import { StyleSheet } from 'react-native';

import { greenColor, greenDarkColor } from 'constants/colors';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 20,
    backgroundColor: greenColor,
  },
  inner: {
    flex: 1,
    borderWidth: 2,
    borderColor: greenDarkColor,
    borderRadius: 8,
  },
  content: {
    flex: 5,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopWidth: 2,
    borderTopColor: greenDarkColor,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  name: {
    flex: 2,
    paddingTop: 100,
    fontSize: 50,
    textAlign: 'center',
    color: greenDarkColor,
  },
  description: {
    fontSize: 30,
    textAlign: 'center',
    color: greenDarkColor,
  },
  hand: {
    flex: 5,
  },
});
