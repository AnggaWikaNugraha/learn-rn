import React from 'react';

import CheckIcon from './check.svg';

import type {Icon} from '../type';
export const Check = (props: Icon) => (
	<CheckIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
