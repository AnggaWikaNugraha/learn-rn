import React from 'react';

import CalendarCancelIcon from './calendar-cancel.svg';

import type {Icon} from '../type';
export const CalendarCancel = (props: Icon) => (
	<CalendarCancelIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
