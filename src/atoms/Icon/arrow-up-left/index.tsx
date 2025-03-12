import React from 'react';

import ArrowUpLeftIcon from './arrow-up-left.svg';

import type {Icon} from '../type';
export const ArrowUpLeft = (props: Icon) => (
	<ArrowUpLeftIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
