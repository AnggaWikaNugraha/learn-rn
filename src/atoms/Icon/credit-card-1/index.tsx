import React from 'react';

import CreditCard1Icon from './credit-card-1.svg';

import type {Icon} from '../type';
export const CreditCard1 = (props: Icon) => (
	<CreditCard1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
