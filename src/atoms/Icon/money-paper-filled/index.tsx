import React from 'react';

import MoneyPaperFilledIcon from './money-paper-filled.svg';

import type {Icon} from '../type';
export const MoneyPaperFilled = (props: Icon) => (
	<MoneyPaperFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
