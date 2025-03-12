import React from 'react';

import Receipt1FilledIcon from './receipt-1-filled.svg';

import type {Icon} from '../type';
export const Receipt1Filled = (props: Icon) => (
	<Receipt1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
