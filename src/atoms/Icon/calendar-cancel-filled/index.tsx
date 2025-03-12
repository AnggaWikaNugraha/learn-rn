import React from 'react';

import CalendarCancelFilledIcon from './calendar-cancel-filled.svg';

import type {Icon} from '../type';
export const CalendarCancelFilled = (props: Icon) => (
	<CalendarCancelFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
