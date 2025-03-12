import React from 'react';

import Coupon1Icon from './coupon-1.svg';

import type {Icon} from '../type';
export const Coupon1 = (props: Icon) => (
	<Coupon1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
