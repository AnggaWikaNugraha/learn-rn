import React from 'react';

import LockOpenIcon from './lock-open.svg';

import type {Icon} from '../type';
export const LockOpen = (props: Icon) => (
	<LockOpenIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
