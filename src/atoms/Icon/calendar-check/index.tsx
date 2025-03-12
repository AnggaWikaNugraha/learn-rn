import React from 'react';

import CalendarCheckIcon from './calendar-check.svg';

import type {Icon} from '../type';
export const CalendarCheck = (props: Icon) => (
	<CalendarCheckIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
