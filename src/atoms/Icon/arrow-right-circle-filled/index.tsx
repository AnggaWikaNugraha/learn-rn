import React from 'react';

import ArrowRightCircleFilledIcon from './arrow-right-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowRightCircleFilled = (props: Icon) => (
	<ArrowRightCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
