import React from 'react';

import TrendUp1Icon from './trend-up-1.svg';

import type {Icon} from '../type';
export const TrendUp1 = (props: Icon) => (
	<TrendUp1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
