import React from 'react';

import ShoppingCartIcon from './shopping-cart.svg';

import type {Icon} from '../type';
export const ShoppingCart = (props: Icon) => (
	<ShoppingCartIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
