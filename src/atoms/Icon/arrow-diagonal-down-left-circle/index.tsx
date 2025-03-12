import React from 'react';

import ArrowDiagonalDownLeftCircleIcon from './arrow-diagonal-down-left-circle.svg';

import type {Icon} from '../type';
export const ArrowDiagonalDownLeftCircle = (props: Icon) => (
	<ArrowDiagonalDownLeftCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
