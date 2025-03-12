import React from 'react';

import LoanFilledIcon from './loan-filled.svg';

import type {Icon} from '../type';
export const LoanFilled = (props: Icon) => (
	<LoanFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
