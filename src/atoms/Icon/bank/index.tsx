import React from 'react';

import BankIcon from './bank.svg';

import type {Icon} from '../type';
export const Bank = (props: Icon) => (
	<BankIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
