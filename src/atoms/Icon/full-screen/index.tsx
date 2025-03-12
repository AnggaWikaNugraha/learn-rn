import React from 'react';

import FullScreenIcon from './full-screen.svg';

import type {Icon} from '../type';
export const FullScreen = (props: Icon) => (
	<FullScreenIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
