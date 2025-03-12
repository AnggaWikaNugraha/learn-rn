import React from 'react';

import ShoppingCartAddFilledIcon from './shopping-cart-add-filled.svg';

import type {Icon} from '../type';
export const ShoppingCartAddFilled = (props: Icon) => (
	<ShoppingCartAddFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
