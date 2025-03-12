import React from 'react';

import ArrowDiagonalUpRightCircleFilledIcon from './arrow-diagonal-up-right-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowDiagonalUpRightCircleFilled = (props: Icon) => (
	<ArrowDiagonalUpRightCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
