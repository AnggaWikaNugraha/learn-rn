import React from 'react';

import GroupIcon from './group.svg';

import type {Icon} from '../type';
export const Group = (props: Icon) => (
	<GroupIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
