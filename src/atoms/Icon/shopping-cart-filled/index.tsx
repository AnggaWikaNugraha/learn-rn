import React from 'react';

import ShoppingCartFilledIcon from './shopping-cart-filled.svg';

import type {Icon} from '../type';
export const ShoppingCartFilled = (props: Icon) => (
	<ShoppingCartFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
