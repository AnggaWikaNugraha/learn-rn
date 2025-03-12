import React from 'react';

import ShoppingBasketIcon from './shopping-basket.svg';

import type {Icon} from '../type';
export const ShoppingBasket = (props: Icon) => (
	<ShoppingBasketIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
