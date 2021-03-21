import PropTypes from 'prop-types';
import React from 'react';

import Svg, { Defs, Rect } from 'react-native-svg';

import { blackColor, whiteColor } from 'constants/colors';

export const Sprite = ({ width = '80%', height = '80%', children }) => (
  <Svg height={height} viewBox="0 0 200000 130000" width={width}>
    <Defs>
      <Rect fill={whiteColor} height="98250" id="card" rx="5124" stroke={blackColor} strokeWidth="50" width="70500" />
    </Defs>
    {children}
  </Svg>
);

Sprite.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
