import React from 'react';

import Calculator2Icon from './calculator-2.svg';

import type {Icon} from '../type';
export const Calculator2 = (props: Icon) => (
	<Calculator2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
