import React from 'react';

import Target1FilledIcon from './target-1-filled.svg';

import type {Icon} from '../type';
export const Target1Filled = (props: Icon) => (
	<Target1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
