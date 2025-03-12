import React from 'react';

import LoanIcon from './loan.svg';

import type {Icon} from '../type';
export const Loan = (props: Icon) => (
	<LoanIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
