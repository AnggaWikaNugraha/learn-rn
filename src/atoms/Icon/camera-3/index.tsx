import React from 'react';

import Camera3Icon from './camera-3.svg';

import type {Icon} from '../type';
export const Camera3 = (props: Icon) => (
	<Camera3Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
