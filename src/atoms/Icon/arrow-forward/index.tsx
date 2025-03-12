import React from 'react';

import ArrowForwardIcon from './arrow-forward.svg';

import type {Icon} from '../type';
export const ArrowForward = (props: Icon) => (
	<ArrowForwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
