import PropTypes from 'prop-types';
import React from 'react';

import { View, Switch, Text } from 'react-native';

import { greenColor, greenDarkColor, redColor, redDarkColor } from '../../constants/colors';
import { EN, RU, langs } from '../../intl';

import { styles } from './styles';

export const LangSwitcher = ({ lang, onPress }) => (
  <View style={styles.switch}>
    <Text style={styles.text}>{RU}</Text>
    <Switch
      thumbColor={lang === RU ? redColor : greenColor}
      trackColor={{ false: redDarkColor, true: greenDarkColor }}
      value={lang === EN}
      onValueChange={() => onPress(lang === RU ? EN : RU)}
    />
    <Text style={styles.text}>{EN}</Text>
  </View>
);

LangSwitcher.propTypes = {
  lang: PropTypes.oneOf(langs).isRequired,
  onPress: PropTypes.func.isRequired,
};
