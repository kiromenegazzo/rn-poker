import PropTypes from 'prop-types';
import React from 'react';

import { View, Text, Pressable } from 'react-native';

import * as Icons from 'components/Icon';

import { HAND_LIST } from 'constants/handList';

import { styles } from './styles';

export const HandList = ({ items, onPress }) => (
  <View style={styles.list}>
    {items.map((item, index) => {
      const { name } = item;
      const svgName = HAND_LIST[index];
      const Icon = Icons[svgName];

      return (
        <Pressable key={name} style={styles.item} onPress={() => onPress({ item, index })}>
          <Icon />
          <Text style={styles.name}>{name}</Text>
        </Pressable>
      );
    })}
  </View>
);

HandList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPress: PropTypes.func.isRequired,
};
