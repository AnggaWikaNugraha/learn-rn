import React from 'react';

import ShieldDisabledIcon from './shield-disabled.svg';

import type {Icon} from '../type';
export const ShieldDisabled = (props: Icon) => (
	<ShieldDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
