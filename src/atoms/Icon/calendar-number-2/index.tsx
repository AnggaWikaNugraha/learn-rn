import React from 'react';

import CalendarNumber2Icon from './calendar-number-2.svg';

import type {Icon} from '../type';
export const CalendarNumber2 = (props: Icon) => (
	<CalendarNumber2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
