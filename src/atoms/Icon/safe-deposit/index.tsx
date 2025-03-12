import React from 'react';

import SafeDepositIcon from './safe-deposit.svg';

import type {Icon} from '../type';
export const SafeDeposit = (props: Icon) => (
	<SafeDepositIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
