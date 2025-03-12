import React from 'react';

import TrendDown1FilledIcon from './trend-down-1-filled.svg';

import type {Icon} from '../type';
export const TrendDown1Filled = (props: Icon) => (
	<TrendDown1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
