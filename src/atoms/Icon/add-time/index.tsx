import React from 'react';

import AddTimeIcon from './add-time.svg';

import type {Icon} from '../type';
export const AddTime = (props: Icon) => (
	<AddTimeIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
