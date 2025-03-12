import React from 'react';

import CreditCard2Icon from './credit-card-2.svg';

import type {Icon} from '../type';
export const CreditCard2 = (props: Icon) => (
	<CreditCard2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
