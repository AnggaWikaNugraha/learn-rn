import React from 'react';

import Calendar2FilledIcon from './calendar-2-filled.svg';

import type {Icon} from '../type';
export const Calendar2Filled = (props: Icon) => (
	<Calendar2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
