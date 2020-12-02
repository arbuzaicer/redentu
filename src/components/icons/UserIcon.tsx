import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from './types';

const UserIcon = ({width, height, color}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 32 32">
    <Path
      d="M22.7 22.9c-2.2-.5-3.7-2.5-3.7-4.7 1.8-1 3-3 3-5.2v0c0-1.1.9-2 2-2h0V8.7c0-2.8-2.1-5.4-4.9-5.7-2-.2-3.8.6-4.9 2.1-.8-.2-1.6-.1-2.6.6-1 .8-1.6 2-1.6 3.3v3.8c0 2.2 1.2 4.3 3 5.4v0c0 2.3-1.6 4.2-3.8 4.8-2.6.7-4.5 2.8-5.1 5.4 0 .3.2.6.6.6h22.7c.4 0 .6-.3.5-.7-.6-2.6-2.6-4.7-5.2-5.4z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default UserIcon;
