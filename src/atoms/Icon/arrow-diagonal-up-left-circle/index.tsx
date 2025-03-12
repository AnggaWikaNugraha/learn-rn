import React from 'react';

import ArrowDiagonalUpLeftCircleIcon from './arrow-diagonal-up-left-circle.svg';

import type {Icon} from '../type';
export const ArrowDiagonalUpLeftCircle = (props: Icon) => (
	<ArrowDiagonalUpLeftCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
