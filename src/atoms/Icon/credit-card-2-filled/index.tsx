import React from 'react';

import CreditCard2FilledIcon from './credit-card-2-filled.svg';

import type {Icon} from '../type';
export const CreditCard2Filled = (props: Icon) => (
	<CreditCard2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
