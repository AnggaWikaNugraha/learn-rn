import React from 'react';

import Camera1FilledIcon from './camera-1-filled.svg';

import type {Icon} from '../type';
export const Camera1Filled = (props: Icon) => (
	<Camera1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
