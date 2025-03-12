import React from 'react';

import ArrowLeftCircleFilledIcon from './arrow-left-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowLeftCircleFilled = (props: Icon) => (
	<ArrowLeftCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
