import React from 'react';

import Coupon4FilledIcon from './coupon-4-filled.svg';

import type {Icon} from '../type';
export const Coupon4Filled = (props: Icon) => (
	<Coupon4FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
