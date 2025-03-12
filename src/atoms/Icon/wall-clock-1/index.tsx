import React from 'react';

import WallClock1Icon from './wall-clock-1.svg';

import type {Icon} from '../type';
export const WallClock1 = (props: Icon) => (
	<WallClock1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
