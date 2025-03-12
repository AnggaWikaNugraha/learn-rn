import React from 'react';

import TableClockFilledIcon from './table-clock-filled.svg';

import type {Icon} from '../type';
export const TableClockFilled = (props: Icon) => (
	<TableClockFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
