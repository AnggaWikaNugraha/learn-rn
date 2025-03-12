import React from 'react';

import FullscreenIcon from './fullscreen.svg';

import type {Icon} from '../type';
export const Fullscreen = (props: Icon) => (
	<FullscreenIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
