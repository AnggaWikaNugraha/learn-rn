import React from 'react';

import CalendarPlusIcon from './calendar-plus.svg';

import type {Icon} from '../type';
export const CalendarPlus = (props: Icon) => (
	<CalendarPlusIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
