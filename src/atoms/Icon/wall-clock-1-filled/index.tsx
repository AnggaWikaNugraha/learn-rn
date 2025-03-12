import React from 'react';

import WallClock1FilledIcon from './wall-clock-1-filled.svg';

import type {Icon} from '../type';
export const WallClock1Filled = (props: Icon) => (
	<WallClock1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
