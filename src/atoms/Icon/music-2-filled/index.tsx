import React from 'react';

import Music2FilledIcon from './music-2-filled.svg';

import type {Icon} from '../type';
export const Music2Filled = (props: Icon) => (
	<Music2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
