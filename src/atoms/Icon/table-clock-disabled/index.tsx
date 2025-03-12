import React from 'react';

import TableClockDisabledIcon from './table-clock-disabled.svg';

import type {Icon} from '../type';
export const TableClockDisabled = (props: Icon) => (
	<TableClockDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
