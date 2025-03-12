import React from 'react';

import ArrowBackwardIcon from './arrow-backward.svg';

import type {Icon} from '../type';
export const ArrowBackward = (props: Icon) => (
	<ArrowBackwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
