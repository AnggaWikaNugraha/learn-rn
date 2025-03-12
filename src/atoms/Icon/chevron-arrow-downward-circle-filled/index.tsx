import React from 'react';

import ChevronArrowDownwardCircleFilledIcon from './chevron-arrow-downward-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronArrowDownwardCircleFilled = (props: Icon) => (
	<ChevronArrowDownwardCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
