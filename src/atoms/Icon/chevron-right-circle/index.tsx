import React from 'react';

import ChevronRightCircleIcon from './chevron-right-circle.svg';

import type {Icon} from '../type';
export const ChevronRightCircle = (props: Icon) => (
	<ChevronRightCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
