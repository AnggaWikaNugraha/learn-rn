import React from 'react';

import ShoppingCartMinusIcon from './shopping-cart-minus.svg';

import type {Icon} from '../type';
export const ShoppingCartMinus = (props: Icon) => (
	<ShoppingCartMinusIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
