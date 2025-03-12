import React from 'react';

import ShieldCheckmarkIcon from './shield-checkmark.svg';

import type {Icon} from '../type';
export const ShieldCheckmark = (props: Icon) => (
	<ShieldCheckmarkIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
