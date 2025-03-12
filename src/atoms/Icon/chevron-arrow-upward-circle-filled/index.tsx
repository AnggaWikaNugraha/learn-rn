import React from 'react';

import ChevronArrowUpwardCircleFilledIcon from './chevron-arrow-upward-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronArrowUpwardCircleFilled = (props: Icon) => (
	<ChevronArrowUpwardCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
