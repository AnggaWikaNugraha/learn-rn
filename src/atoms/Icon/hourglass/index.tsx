import React from 'react';

import HourglassIcon from './hourglass.svg';

import type {Icon} from '../type';
export const Hourglass = (props: Icon) => (
	<HourglassIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
