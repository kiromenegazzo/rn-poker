import PropTypes from 'prop-types';
import React from 'react';

import { Modal as RNModal, View, Text, Pressable } from 'react-native';

import * as Icons from 'components/Icon';

import { HAND_LIST } from 'constants/handList';

import { styles } from './styles';

const { Close } = Icons;

export const Modal = ({ content, onClose }) => {
  const { item, index } = content || {};
  const { name, description } = item || {};
  const svgName = HAND_LIST[index];
  const Hand = Icons[svgName];

  return (
    <RNModal
      transparent
      visible={Boolean(item)}
    >
      <View style={styles.modal}>
        <View style={styles.inner}>
          <View style={styles.content}>
            <Pressable style={styles.close} onPress={onClose}>
              <Close />
            </Pressable>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.hand}>{svgName && <Hand height="100%" width="100%" />}</View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
    </RNModal>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({}),
};
