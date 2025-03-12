import React from 'react';

import ArrowDownUpIcon from './arrow-down-up.svg';

import type {Icon} from '../type';
export const ArrowDownUp = (props: Icon) => (
	<ArrowDownUpIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
