import React from 'react';

import ArrowUpwardIcon from './arrow-upward.svg';

import type {Icon} from '../type';
export const ArrowUpward = (props: Icon) => (
	<ArrowUpwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
