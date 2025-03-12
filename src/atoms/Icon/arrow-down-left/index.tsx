import React from 'react';

import ArrowDownLeftIcon from './arrow-down-left.svg';

import type {Icon} from '../type';
export const ArrowDownLeft = (props: Icon) => (
	<ArrowDownLeftIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
