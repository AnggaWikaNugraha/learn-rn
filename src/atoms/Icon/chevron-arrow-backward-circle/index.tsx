import React from 'react';

import ChevronArrowBackwardCircleIcon from './chevron-arrow-backward-circle.svg';

import type {Icon} from '../type';
export const ChevronArrowBackwardCircle = (props: Icon) => (
	<ChevronArrowBackwardCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
