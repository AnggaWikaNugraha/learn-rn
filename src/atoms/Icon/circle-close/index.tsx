import React from 'react';

import CircleCloseIcon from './circle-close.svg';

import type {Icon} from '../type';
export const CircleClose = (props: Icon) => (
	<CircleCloseIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
