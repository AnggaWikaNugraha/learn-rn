import React from 'react';

import ArrowLeftIcon from './arrow-left.svg';

import type {Icon} from '../type';
export const ArrowLeft = (props: Icon) => (
	<ArrowLeftIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
