import React from 'react';

import Receipt1Icon from './receipt-1.svg';

import type {Icon} from '../type';
export const Receipt1 = (props: Icon) => (
	<Receipt1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
