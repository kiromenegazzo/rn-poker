import React from 'react';
import { View, Text, Pressable} from 'react-native';
import * as Sprite from '../Sprite';
import {styles} from "./styles";

const {SVG_NAME_LIST} = Sprite;

export const HandList = ({items, onPress}) => {

    return(
        <View style={styles.list}>
            {items.map((item, index) => {
                const {name} = item;
                const svgName = SVG_NAME_LIST[index];
                const Hand = Sprite[svgName];

                return(
                  <Pressable key={name} style={styles.item} onPress={() => onPress({item, index})}>
                      <Hand/>
                      <Text style={styles.name}>{name}</Text>
                  </Pressable>
                );
            })}
        </View>
    )
};

