import React from 'react';

import SecurityFilledIcon from './security-filled.svg';

import type {Icon} from '../type';
export const SecurityFilled = (props: Icon) => (
	<SecurityFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
