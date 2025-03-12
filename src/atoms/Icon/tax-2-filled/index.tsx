import React from 'react';

import Tax2FilledIcon from './tax-2-filled.svg';

import type {Icon} from '../type';
export const Tax2Filled = (props: Icon) => (
	<Tax2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
