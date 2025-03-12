import React from 'react';

import Coupon4Icon from './coupon-4.svg';

import type {Icon} from '../type';
export const Coupon4 = (props: Icon) => (
	<Coupon4Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
