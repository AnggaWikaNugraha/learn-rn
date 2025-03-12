import React from 'react';

import ShoppingBasketFilledIcon from './shopping-basket-filled.svg';

import type {Icon} from '../type';
export const ShoppingBasketFilled = (props: Icon) => (
	<ShoppingBasketFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
