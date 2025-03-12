import React from 'react';

import HistoryIcon from './history.svg';

import type {Icon} from '../type';
export const History = (props: Icon) => (
	<HistoryIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
