import React from 'react';

import MoneyBag2Icon from './money-bag-2.svg';

import type {Icon} from '../type';
export const MoneyBag2 = (props: Icon) => (
	<MoneyBag2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
