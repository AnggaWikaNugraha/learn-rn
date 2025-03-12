import React from 'react';

import MoneyCoinDollarFilledIcon from './money-coin-dollar-filled.svg';

import type {Icon} from '../type';
export const MoneyCoinDollarFilled = (props: Icon) => (
	<MoneyCoinDollarFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
