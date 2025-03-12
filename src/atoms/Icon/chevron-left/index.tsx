import React from 'react';

import ChevronLeftIcon from './chevron-left.svg';

import type {Icon} from '../type';
export const ChevronLeft = (props: Icon) => (
	<ChevronLeftIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
