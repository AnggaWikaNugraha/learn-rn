import React from 'react';

import Music1FilledIcon from './music-1-filled.svg';

import type {Icon} from '../type';
export const Music1Filled = (props: Icon) => (
	<Music1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
