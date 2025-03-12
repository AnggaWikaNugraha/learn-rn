import React from 'react';

import AddPerson1Icon from './add-person-1.svg';

import type {Icon} from '../type';
export const AddPerson1 = (props: Icon) => (
	<AddPerson1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
