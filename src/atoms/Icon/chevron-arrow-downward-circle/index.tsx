import React from 'react';

import ChevronArrowDownwardCircleIcon from './chevron-arrow-downward-circle.svg';

import type {Icon} from '../type';
export const ChevronArrowDownwardCircle = (props: Icon) => (
	<ChevronArrowDownwardCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
