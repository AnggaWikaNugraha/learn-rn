import React from 'react';

import TrendDown1Icon from './trend-down-1.svg';

import type {Icon} from '../type';
export const TrendDown1 = (props: Icon) => (
	<TrendDown1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
