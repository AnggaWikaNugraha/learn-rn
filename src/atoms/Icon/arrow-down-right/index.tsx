import React from 'react';

import ArrowDownRightIcon from './arrow-down-right.svg';

import type {Icon} from '../type';
export const ArrowDownRight = (props: Icon) => (
	<ArrowDownRightIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
