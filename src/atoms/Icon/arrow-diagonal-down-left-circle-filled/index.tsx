import React from 'react';

import ArrowDiagonalDownLeftCircleFilledIcon from './arrow-diagonal-down-left-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowDiagonalDownLeftCircleFilled = (props: Icon) => (
	<ArrowDiagonalDownLeftCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
