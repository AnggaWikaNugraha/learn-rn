import React from 'react';

import MoneyCoinDollarIcon from './money-coin-dollar.svg';

import type {Icon} from '../type';
export const MoneyCoinDollar = (props: Icon) => (
	<MoneyCoinDollarIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
