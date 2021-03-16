import React from "react"
import Svg, {Defs, Rect} from 'react-native-svg';
import {blackColor, whiteColor} from "../../constants/colors";

export const Sprite = ({width = '80%', height = '80%', children}) => (
    <Svg width={width} height={height} viewBox="0 0 200000 130000">
        <Defs>
            <Rect id="card" width="70500" rx="5124" height="98250" stroke={blackColor} strokeWidth="50" fill={whiteColor}/>
        </Defs>
        {children}
    </Svg>
);

export const SVG_NAME_LIST = [
    'ROYAL_FLUSH',
    'STRAIGHT_FLUSH',
    'FOUR_OF_A_KIND',
    'FULL_HOUSE',
    'FLUSH',
    'STRAIGHT',
    'THREE_OF_A_KIND',
    'TWO_PAIRS',
    'ONE_PAIR',
    'HIGH_CARD'
];
