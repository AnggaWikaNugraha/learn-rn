import React from 'react';

import ChevronArrowUpCircleIcon from './chevron-arrow-up-circle.svg';

import type {Icon} from '../type';
export const ChevronArrowUpCircle = (props: Icon) => (
	<ChevronArrowUpCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
