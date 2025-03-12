import React from 'react';

import WallClock2Icon from './wall-clock-2.svg';

import type {Icon} from '../type';
export const WallClock2 = (props: Icon) => (
	<WallClock2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
