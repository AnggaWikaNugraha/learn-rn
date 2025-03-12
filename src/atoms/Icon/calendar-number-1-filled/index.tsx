import React from 'react';

import CalendarNumber1FilledIcon from './calendar-number-1-filled.svg';

import type {Icon} from '../type';
export const CalendarNumber1Filled = (props: Icon) => (
	<CalendarNumber1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
