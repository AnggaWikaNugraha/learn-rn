import React from 'react';

import CalendarPlusFilledIcon from './calendar-plus-filled.svg';

import type {Icon} from '../type';
export const CalendarPlusFilled = (props: Icon) => (
	<CalendarPlusFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
