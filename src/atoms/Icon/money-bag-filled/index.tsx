import React from 'react';

import MoneyBagFilledIcon from './money-bag-filled.svg';

import type {Icon} from '../type';
export const MoneyBagFilled = (props: Icon) => (
	<MoneyBagFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
