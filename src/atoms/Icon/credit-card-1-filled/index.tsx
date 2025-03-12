import React from 'react';

import CreditCard1FilledIcon from './credit-card-1-filled.svg';

import type {Icon} from '../type';
export const CreditCard1Filled = (props: Icon) => (
	<CreditCard1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
