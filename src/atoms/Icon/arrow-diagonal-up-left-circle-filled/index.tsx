import React from 'react';

import ArrowDiagonalUpLeftCircleFilledIcon from './arrow-diagonal-up-left-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowDiagonalUpLeftCircleFilled = (props: Icon) => (
	<ArrowDiagonalUpLeftCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
