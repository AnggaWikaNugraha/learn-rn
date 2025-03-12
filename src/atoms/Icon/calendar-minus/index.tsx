import React from 'react';

import CalendarMinusIcon from './calendar-minus.svg';

import type {Icon} from '../type';
export const CalendarMinus = (props: Icon) => (
	<CalendarMinusIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
