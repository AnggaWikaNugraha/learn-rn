import React from 'react';

import ArrowRightIcon from './arrow-right.svg';

import type {Icon} from '../type';
export const ArrowRight = (props: Icon) => (
	<ArrowRightIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
