import React from 'react';

import Coupon1FilledIcon from './coupon-1-filled.svg';

import type {Icon} from '../type';
export const Coupon1Filled = (props: Icon) => (
	<Coupon1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
