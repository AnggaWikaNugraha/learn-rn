import React from 'react';

import Microphone1FilledIcon from './microphone-1-filled.svg';

import type {Icon} from '../type';
export const Microphone1Filled = (props: Icon) => (
	<Microphone1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
