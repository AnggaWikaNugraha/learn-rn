import React from 'react';

import RemovePerson1Icon from './remove-person.svg';

import type {Icon} from '../type';
export const RemovePerson = (props: Icon) => (
	<RemovePerson1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
