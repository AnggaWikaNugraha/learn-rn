import React from 'react';

import LockDisabledIcon from './lock-disabled.svg';

import type {Icon} from '../type';
export const LockDisabled = (props: Icon) => (
	<LockDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
