import React from 'react';

import Camera2Icon from './camera-2.svg';

import type {Icon} from '../type';
export const Camera2 = (props: Icon) => (
	<Camera2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
