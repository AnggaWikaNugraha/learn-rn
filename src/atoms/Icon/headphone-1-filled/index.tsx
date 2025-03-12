import React from 'react';

import Headphone1FilledIcon from './headphone-1-filled.svg';

import type {Icon} from '../type';
export const Headphone1Filled = (props: Icon) => (
	<Headphone1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
