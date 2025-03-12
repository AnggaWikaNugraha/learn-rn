import React from 'react';

import ArrowDownCircleFilledIcon from './arrow-down-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowDownCircleFilled = (props: Icon) => (
	<ArrowDownCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
