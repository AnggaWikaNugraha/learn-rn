import React from 'react';

import Tax2Icon from './tax-2.svg';

import type {Icon} from '../type';
export const Tax2 = (props: Icon) => (
	<Tax2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
