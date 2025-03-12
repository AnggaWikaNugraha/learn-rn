import React from 'react';

import Coupon3Icon from './coupon-3.svg';

import type {Icon} from '../type';
export const Coupon3 = (props: Icon) => (
	<Coupon3Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
