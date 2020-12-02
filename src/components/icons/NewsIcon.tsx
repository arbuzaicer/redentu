import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from './types';

const NewsIcon = ({width, height, color}: IconProps) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
    <Path d="M5 1v2H1v17a3 3 0 003 3h15.24A3.77 3.77 0 0023 19.24V1zM3 20V5h2v15a1 1 0 01-2 0zm18-.76A1.76 1.76 0 0119.24 21H6.82A3 3 0 007 20V3h14z" />
    <Path d="M11 5h8v2h-8zM9 9h10v2H9zM9 13h10v2H9zM9 17h10v2H9z" />
  </Svg>
);

export default NewsIcon;
