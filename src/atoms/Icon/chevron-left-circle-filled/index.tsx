import React from 'react';

import ChevronLeftCircleFilledIcon from './chevron-left-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronLeftCircleFilled = (props: Icon) => (
	<ChevronLeftCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
