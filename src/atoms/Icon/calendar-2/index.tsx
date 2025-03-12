import React from 'react';

import Calendar2Icon from './calendar-2.svg';

import type {Icon} from '../type';
export const Calendar2 = (props: Icon) => (
	<Calendar2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
