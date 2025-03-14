import React from 'react';

import Calendar1FilledIcon from './calendar-1-filled.svg';

import type {Icon} from '../type';
export const Calendar1Filled = (props: Icon) => (
	<Calendar1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
