import React from 'react';

import Camera2FilledIcon from './camera-2-filled.svg';

import type {Icon} from '../type';
export const Camera2Filled = (props: Icon) => (
	<Camera2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
