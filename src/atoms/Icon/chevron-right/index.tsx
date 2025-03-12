import React from 'react';

import ChevronRightIcon from './chevron-right.svg';

import type {Icon} from '../type';
export const ChevronRight = (props: Icon) => (
	<ChevronRightIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
