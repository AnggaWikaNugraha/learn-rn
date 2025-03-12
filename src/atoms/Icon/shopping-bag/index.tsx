import React from 'react';

import ShoppingBagIcon from './shopping-bag.svg';

import type {Icon} from '../type';
export const ShoppingBag = (props: Icon) => (
	<ShoppingBagIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
