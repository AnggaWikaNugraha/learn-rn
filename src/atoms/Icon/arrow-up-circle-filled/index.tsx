import React from 'react';

import ArrowUpCircleFilledIcon from './arrow-up-circle-filled.svg';

import type {Icon} from '../type';
export const ArrowUpCircleFilled = (props: Icon) => (
	<ArrowUpCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
