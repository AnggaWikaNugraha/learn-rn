import React from 'react';

import AddTimeFilledIcon from './add-time-filled.svg';

import type {Icon} from '../type';
export const AddTimeFilled = (props: Icon) => (
	<AddTimeFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
