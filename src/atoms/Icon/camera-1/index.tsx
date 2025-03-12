import React from 'react';

import Camera1Icon from './camera-1.svg';

import type {Icon} from '../type';
export const Camera1 = (props: Icon) => (
	<Camera1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
