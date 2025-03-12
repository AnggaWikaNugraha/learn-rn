import React from 'react';

import ChevronArrowForwardCircleIcon from './chevron-arrow-forward-circle.svg';

import type {Icon} from '../type';
export const ChevronArrowForwardCircle = (props: Icon) => (
	<ChevronArrowForwardCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
