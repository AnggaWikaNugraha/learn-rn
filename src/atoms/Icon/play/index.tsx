import React from 'react';

import PlayIcon from './play.svg';

import type {Icon} from '../type';
export const Play = (props: Icon) => (
	<PlayIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
