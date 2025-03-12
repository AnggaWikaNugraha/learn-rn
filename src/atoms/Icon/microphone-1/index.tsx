import React from 'react';

import Microphone1Icon from './microphone-1.svg';

import type {Icon} from '../type';
export const Microphone1 = (props: Icon) => (
	<Microphone1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
