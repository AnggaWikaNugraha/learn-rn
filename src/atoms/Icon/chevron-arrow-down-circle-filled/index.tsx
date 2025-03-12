import React from 'react';

import ChevronArrowDownCircleFilledIcon from './chevron-arrow-down-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronArrowDownCircleFilled = (props: Icon) => (
	<ChevronArrowDownCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
