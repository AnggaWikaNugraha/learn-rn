import React from 'react';

import LockFilledIcon from './lock-filled.svg';

import type {Icon} from '../type';
export const LockFilled = (props: Icon) => (
	<LockFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
