import React from 'react';

import BurgerMenu2Icon from './burger-menu-2.svg';

import type {Icon} from '../type';
export const BurgerMenu2 = (props: Icon) => (
	<BurgerMenu2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
