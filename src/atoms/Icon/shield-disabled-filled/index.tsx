import React from 'react';

import ShieldDisabledFilledIcon from './shield-disabled-filled.svg';

import type {Icon} from '../type';
export const ShieldDisabledFilled = (props: Icon) => (
	<ShieldDisabledFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
