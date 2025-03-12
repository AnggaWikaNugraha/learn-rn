import React from 'react';

import ExitFullScreenIcon from './exit-full-screen.svg';

import type {Icon} from '../type';
export const ExitFullScreen = (props: Icon) => (
	<ExitFullScreenIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
