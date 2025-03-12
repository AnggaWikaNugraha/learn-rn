import React from 'react';

import MaximizeIcon from './maximize.svg';

import type {Icon} from '../type';
export const Maximize = (props: Icon) => (
	<MaximizeIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
