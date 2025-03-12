import React from 'react';

import Location2FilledIcon from './location-2-filled.svg';

import type {Icon} from '../type';
export const Location2Filled = (props: Icon) => (
	<Location2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
