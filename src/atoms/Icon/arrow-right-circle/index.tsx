import React from 'react';

import ArrowRightCircleIcon from './arrow-right-circle.svg';

import type {Icon} from '../type';
export const ArrowRightCircle = (props: Icon) => (
	<ArrowRightCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
