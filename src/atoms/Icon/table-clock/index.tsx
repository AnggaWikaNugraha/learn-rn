import React from 'react';

import TableClockIcon from './table-clock.svg';

import type {Icon} from '../type';
export const TableClock = (props: Icon) => (
	<TableClockIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
