import React from 'react';

import LockIcon from './lock.svg';

import type {Icon} from '../type';
export const Lock = (props: Icon) => (
	<LockIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
