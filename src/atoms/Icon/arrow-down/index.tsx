import React from 'react';

import ArrowDownIcon from './arrow-down.svg';

import type {Icon} from '../type';
export const ArrowDown = (props: Icon) => (
	<ArrowDownIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
