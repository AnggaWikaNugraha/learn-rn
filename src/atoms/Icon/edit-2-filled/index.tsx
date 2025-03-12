import React from 'react';

import Edit2FilledIcon from './edit-2-filled.svg';

import type {Icon} from '../type';
export const Edit2Filled = (props: Icon) => (
	<Edit2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
