import React from 'react';

import BurgerMenu1Icon from './burger-menu-1.svg';

import type {Icon} from '../type';
export const BurgerMenu1 = (props: Icon) => (
	<BurgerMenu1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
