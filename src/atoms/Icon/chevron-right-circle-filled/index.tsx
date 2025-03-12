import React from 'react';

import ChevronRightCircleFilledIcon from './chevron-right-circle-filled.svg';

import type {Icon} from '../type';
export const ChevronRightCircleFilled = (props: Icon) => (
	<ChevronRightCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
