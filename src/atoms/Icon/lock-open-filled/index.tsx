import React from 'react';

import LockOpenFilledIcon from './lock-open-filled.svg';

import type {Icon} from '../type';
export const LockOpenFilled = (props: Icon) => (
	<LockOpenFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
