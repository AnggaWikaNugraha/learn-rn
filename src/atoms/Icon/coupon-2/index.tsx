import React from 'react';

import Coupon2Icon from './coupon-2.svg';

import type {Icon} from '../type';
export const Coupon2 = (props: Icon) => (
	<Coupon2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
