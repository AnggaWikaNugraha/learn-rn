import React from 'react';

import Camera3FilledIcon from './camera-3-filled.svg';

import type {Icon} from '../type';
export const Camera3Filled = (props: Icon) => (
	<Camera3FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
