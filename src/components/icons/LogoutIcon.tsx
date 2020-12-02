import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from './types';

const LogoutIcon = ({width, height, color}: IconProps) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
    <Path d="M7.707 8.707L5.414 11H17a1 1 0 010 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414zM21 1h-8a1 1 0 000 2h7v18h-7a1 1 0 000 2h8a1 1 0 001-1V2a1 1 0 00-1-1z" />
  </Svg>
);

export default LogoutIcon;
