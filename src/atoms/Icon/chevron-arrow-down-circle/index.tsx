import React from 'react';

import ChevronArrowDownCircleIcon from './chevron-arrow-down-circle.svg';

import type {Icon} from '../type';
export const ChevronArrowDownCircle = (props: Icon) => (
	<ChevronArrowDownCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
