import React from 'react';

import CalendarCheckFilledIcon from './calendar-check-filled.svg';

import type {Icon} from '../type';
export const CalendarCheckFilled = (props: Icon) => (
	<CalendarCheckFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
