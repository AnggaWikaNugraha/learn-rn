import React from 'react';

import ArrowDiagonalUpRightCircleIcon from './arrow-diagonal-up-right-circle.svg';

import type {Icon} from '../type';
export const ArrowDiagonalUpRightCircle = (props: Icon) => (
	<ArrowDiagonalUpRightCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
