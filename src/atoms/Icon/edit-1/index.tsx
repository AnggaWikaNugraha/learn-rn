import React from 'react';

import Edit1Icon from './edit-1.svg';

import type {Icon} from '../type';
export const Edit1 = (props: Icon) => (
	<Edit1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
