import React from 'react';

import ArrowDownwardIcon from './arrow-downward.svg';

import type {Icon} from '../type';
export const ArrowDownward = (props: Icon) => (
	<ArrowDownwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
