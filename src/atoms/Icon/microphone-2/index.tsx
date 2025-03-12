import React from 'react';

import Microphone2Icon from './microphone-2.svg';

import type {Icon} from '../type';
export const Microphone2 = (props: Icon) => (
	<Microphone2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
