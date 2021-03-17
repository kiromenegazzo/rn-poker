import React from 'react';

import Svg, { Circle, Line } from 'react-native-svg';

import { greenDarkColor } from 'constants/colors';

export const Close = () => {
  const strokeWidth = 3;
  const stroke = greenDarkColor;
  const lineStart = 14;
  const lineEnd = 46;

  return (
    <Svg height="50" viewBox="0 0 60 60" width="50">
      <Circle
        cx="30"
        cy="30"
        fill="none"
        r="28"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <Line
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        x1={lineStart}
        x2={lineEnd}
        y1={lineStart}
        y2={lineEnd}
      />
      <Line
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        x1={lineEnd}
        x2={lineStart}
        y1={lineStart}
        y2={lineEnd}
      />
    </Svg>
  );
};
