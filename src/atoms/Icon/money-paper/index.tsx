import React from 'react';

import MoneyPaperIcon from './money-paper.svg';

import type {Icon} from '../type';
export const MoneyPaper = (props: Icon) => (
	<MoneyPaperIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
