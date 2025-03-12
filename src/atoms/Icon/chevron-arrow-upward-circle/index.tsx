import React from 'react';

import ChevronArrowUpwardCircleIcon from './chevron-arrow-upward-circle.svg';

import type {Icon} from '../type';
export const ChevronArrowUpwardCircle = (props: Icon) => (
	<ChevronArrowUpwardCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
