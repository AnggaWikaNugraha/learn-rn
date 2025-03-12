import React from 'react';

import TrendDown2Icon from './trend-down-2.svg';

import type {Icon} from '../type';
export const TrendDown2 = (props: Icon) => (
	<TrendDown2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
