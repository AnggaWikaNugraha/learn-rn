import React from 'react';

import Edit1FilledIcon from './edit-1-filled.svg';

import type {Icon} from '../type';
export const Edit1Filled = (props: Icon) => (
	<Edit1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
