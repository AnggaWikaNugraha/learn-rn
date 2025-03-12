import React from 'react';

import ShoppingBagFilledIcon from './shopping-bag-filled.svg';

import type {Icon} from '../type';
export const ShoppingBagFilled = (props: Icon) => (
	<ShoppingBagFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
