import React from 'react';

import CheckCircleIcon from './check-circle.svg';

import type {Icon} from '../type';
export const CheckCircle = (props: Icon) => (
	<CheckCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
