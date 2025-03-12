import React from 'react';

import ArrowDownCircleIcon from './arrow-down-circle.svg';

import type {Icon} from '../type';
export const ArrowDownCircle = (props: Icon) => (
	<ArrowDownCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
