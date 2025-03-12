import React from 'react';

import TrendUp2Icon from './trend-up-2.svg';

import type {Icon} from '../type';
export const TrendUp2 = (props: Icon) => (
	<TrendUp2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
