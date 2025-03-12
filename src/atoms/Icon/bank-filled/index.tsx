import React from 'react';

import BankFilledIcon from './bank-filled.svg';

import type {Icon} from '../type';
export const BankFilled = (props: Icon) => (
	<BankFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
