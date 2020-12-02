import React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

import {IconProps} from './types';

const LockIcon = ({width, height, color}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 38 50">
    <G data-name="Layer 2">
      <Path
        d="M32.15 21H32v-8A13 13 0 0018.41 0 13.27 13.27 0 006 13.4v2.1a2.5 2.5 0 005 0v-2.18A8.21 8.21 0 0118.48 5 8 8 0 0127 13v8H5.85A5.85 5.85 0 000 26.85v17.3A5.85 5.85 0 005.85 50h26.3A5.85 5.85 0 0038 44.15v-17.3A5.85 5.85 0 0032.15 21zM33 44.15a.85.85 0 01-.85.85H5.85a.85.85 0 01-.85-.85v-17.3a.85.85 0 01.85-.85h26.3a.85.85 0 01.85.85z"
        fill={color}
      />
      <Rect
        x={16.5}
        y={31}
        width={5}
        height={9}
        rx={2.5}
        ry={2.5}
        fill="#00c569"
      />
    </G>
  </Svg>
);

export default LockIcon;
