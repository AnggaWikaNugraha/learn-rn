import React from 'react';

import Calculator1Icon from './calculator-1.svg';

import type {Icon} from '../type';
export const Calculator1 = (props: Icon) => (
	<Calculator1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
