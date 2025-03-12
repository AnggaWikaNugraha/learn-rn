import React from 'react';

import AddPerson2Icon from './add-person-2.svg';

import type {Icon} from '../type';
export const AddPerson2 = (props: Icon) => (
	<AddPerson2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
