import React from 'react';

import ChevronArrowUpCircleFilledIcon from './chevron-arrow-up-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronArrowUpCircleFilled = (props: Icon) => (
	<ChevronArrowUpCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
