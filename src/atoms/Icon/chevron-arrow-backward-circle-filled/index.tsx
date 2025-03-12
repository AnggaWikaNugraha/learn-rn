import React from 'react';

import ChevronArrowBackwardCircleFilledIcon from './chevron-arrow-backward-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronArrowBackwardCircleFilled = (props: Icon) => (
	<ChevronArrowBackwardCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
