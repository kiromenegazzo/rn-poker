import React from 'react';
import { Modal as RNModal, View, Text, Pressable} from 'react-native';
import * as Symbols from '../Sprite';
import Svg, {Circle, Line} from 'react-native-svg';
import {styles} from "./styles";
import {secondaryColor} from "../../constants/colors";

const {SVG_NAME_LIST} = Symbols;

const Close = () => {
    const strokeWidth = 3;
    const stroke = secondaryColor;
    const lineStart = 14;
    const lineEnd = 46;

    return(
        <Svg width="50" height="50" viewBox="0 0 60 60">
            <Circle
                cx="30"
                cy="30"
                r="28"
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
            <Line
                x1={lineStart}
                y1={lineStart}
                x2={lineEnd}
                y2={lineEnd}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            <Line
                x1={lineEnd}
                y1={lineStart}
                x2={lineStart}
                y2={lineEnd}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </Svg>
    );
}

export const Modal = ({content, onClose}) => {
    const {item, index} = content || {};
    const {name, description} = item || {};
    const svgName = SVG_NAME_LIST[index];
    const Hand = Symbols[svgName];

    return(
        <RNModal
        visible={Boolean(item)}
        transparent
        >
            <View         style={styles.modal}>

                   <View style={styles.inner}>
<View style={styles.content}>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

    {svgName && <Hand width="100%" height="100%"/>}
    <Pressable onPress={onClose} style={styles.close}>
        <Close/>
    </Pressable>
</View>
                   </View>
            </View>
        </RNModal>
    )
}
