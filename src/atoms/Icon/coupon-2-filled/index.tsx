import React from 'react';

import Coupon2FilledIcon from './coupon-2-filled.svg';

import type {Icon} from '../type';
export const Coupon2Filled = (props: Icon) => (
	<Coupon2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
