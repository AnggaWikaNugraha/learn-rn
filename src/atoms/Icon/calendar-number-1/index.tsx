import React from 'react';

import CalendarNumber1Icon from './calendar-number-1.svg';

import type {Icon} from '../type';
export const CalendarNumber1 = (props: Icon) => (
	<CalendarNumber1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
