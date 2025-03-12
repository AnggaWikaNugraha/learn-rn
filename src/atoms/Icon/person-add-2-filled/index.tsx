import React from 'react';

import PersonAdd2FilledIcon from './person-add-2-filled.svg';

import type {Icon} from '../type';
export const PersonAdd2Filled = (props: Icon) => (
	<PersonAdd2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
