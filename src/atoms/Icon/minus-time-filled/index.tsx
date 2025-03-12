import React from 'react';

import MinusTimeFilledIcon from './minus-time-filled.svg';

import type {Icon} from '../type';
export const MinusTimeFilled = (props: Icon) => (
	<MinusTimeFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
