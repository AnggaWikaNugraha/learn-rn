import React from 'react';

import PersonRemove1FilledIcon from './person-remove-1-filled.svg';

import type {Icon} from '../type';
export const PersonRemove1Filled = (props: Icon) => (
	<PersonRemove1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
