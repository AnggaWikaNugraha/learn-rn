import React from 'react';

import ArrowUpCircleIcon from './arrow-up-circle.svg';

import type {Icon} from '../type';
export const ArrowUpCircle = (props: Icon) => (
	<ArrowUpCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
