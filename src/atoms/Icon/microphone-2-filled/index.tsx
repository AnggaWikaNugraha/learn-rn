import React from 'react';

import Microphone2FilledIcon from './microphone-2-filled.svg';

import type {Icon} from '../type';
export const Microphone2Filled = (props: Icon) => (
	<Microphone2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
