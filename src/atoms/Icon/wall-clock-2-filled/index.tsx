import React from 'react';

import WallClock2FilledIcon from './wall-clock-2-filled.svg';

import type {Icon} from '../type';
export const WallClock2Filled = (props: Icon) => (
	<WallClock2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
