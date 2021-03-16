import PropTypes from 'prop-types';
import React from 'react';

import { View, Switch, Text } from 'react-native';

import { primaryColor, secondaryColor } from '../../constants/colors';
import { EN, RU, langs } from '../../intl';

import { styles } from './styles';

export const LangSwitcher = ({ lang, onPress }) => (
  <View style={styles.switch}>
    <Text style={styles.text}>{RU}</Text>
    <Switch
      thumbColor={lang === RU ? 'red' : primaryColor}
      trackColor={{ false: 'red', true: secondaryColor }}
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
