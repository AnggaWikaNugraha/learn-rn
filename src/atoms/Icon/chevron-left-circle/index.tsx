import React from 'react';

import ChevronLeftCircleIcon from './chevron-left-circle.svg';

import type {Icon} from '../type';
export const ChevronLeftCircle = (props: Icon) => (
	<ChevronLeftCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
