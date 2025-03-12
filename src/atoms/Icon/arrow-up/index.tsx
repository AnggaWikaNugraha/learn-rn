import React from 'react';

import ArrowUpIcon from './arrow-up.svg';

import type {Icon} from '../type';
export const ArrowUp = (props: Icon) => (
	<ArrowUpIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
