import React from 'react';

import LockDisabledFilledIcon from './lock-disabled-filled.svg';

import type {Icon} from '../type';
export const LockDisabledFilled = (props: Icon) => (
	<LockDisabledFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
