import React from 'react';

import CalendarMinusFilledIcon from './calendar-minus-filled.svg';

import type {Icon} from '../type';
export const CalendarMinusFilled = (props: Icon) => (
	<CalendarMinusFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
