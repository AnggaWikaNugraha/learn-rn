import React from 'react';

import BurgerMenu3Icon from './burger-menu-3.svg';

import type {Icon} from '../type';
export const BurgerMenu3 = (props: Icon) => (
	<BurgerMenu3Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
