import React from 'react';

import ArrowLeftCircleIcon from './arrow-left-circle.svg';

import type {Icon} from '../type';
export const ArrowLeftCircle = (props: Icon) => (
	<ArrowLeftCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
