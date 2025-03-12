import React from 'react';

import ChevronArrowForwardCircleFilledIcon from './chevron-arrow-forward-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronArrowForwardCircleFilled = (props: Icon) => (
	<ChevronArrowForwardCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
