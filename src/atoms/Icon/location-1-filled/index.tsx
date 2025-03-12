import React from 'react';

import Location1FilledIcon from './location-1-filled.svg';

import type {Icon} from '../type';
export const Location1Filled = (props: Icon) => (
	<Location1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
