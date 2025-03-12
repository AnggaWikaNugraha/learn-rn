import React from 'react';

import CalendarNumber2FilledIcon from './calendar-number-2-filled.svg';

import type {Icon} from '../type';
export const CalendarNumber2Filled = (props: Icon) => (
	<CalendarNumber2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
