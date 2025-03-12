import React from 'react';

import HistoryFilledIcon from './history-filled.svg';

import type {Icon} from '../type';
export const HistoryFilled = (props: Icon) => (
	<HistoryFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
