import React from 'react';

import Time2Icon from './time-2.svg';

import type {Icon} from '../type';
export const Time2 = (props: Icon) => (
	<Time2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
