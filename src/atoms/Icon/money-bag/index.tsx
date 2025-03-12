import React from 'react';

import MoneyBagIcon from './money-bag.svg';

import type {Icon} from '../type';
export const MoneyBag = (props: Icon) => (
	<MoneyBagIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
