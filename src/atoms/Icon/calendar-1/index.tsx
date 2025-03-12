import React from 'react';

import Calendar1Icon from './calendar-1.svg';

import type {Icon} from '../type';
export const Calendar1 = (props: Icon) => (
	<Calendar1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
