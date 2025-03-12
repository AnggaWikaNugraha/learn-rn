import React from 'react';

import ShoppingCartAddIcon from './shopping-cart-add.svg';

import type {Icon} from '../type';
export const ShoppingCartAdd = (props: Icon) => (
	<ShoppingCartAddIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
