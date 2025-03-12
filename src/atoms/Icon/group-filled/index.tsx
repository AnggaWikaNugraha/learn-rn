import React from 'react';

import GroupFilledIcon from './group-filled.svg';

import type {Icon} from '../type';
export const GroupFilled = (props: Icon) => (
	<GroupFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
