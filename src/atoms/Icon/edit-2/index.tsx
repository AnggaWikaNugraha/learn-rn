import React from 'react';

import Edit2Icon from './edit-2.svg';

import type {Icon} from '../type';
export const Edit2 = (props: Icon) => (
	<Edit2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
