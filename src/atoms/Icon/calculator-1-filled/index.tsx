import React from 'react';

import Calculator1FilledIcon from './calculator-1-filled.svg';

import type {Icon} from '../type';
export const Calculator1Filled = (props: Icon) => (
	<Calculator1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
