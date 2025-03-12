import React from 'react';

import ScreenIcon from './screen.svg';

import type {Icon} from '../type';
export const Screen = (props: Icon) => (
	<ScreenIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
