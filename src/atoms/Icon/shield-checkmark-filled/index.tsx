import React from 'react';

import ShieldCheckmarkFilledIcon from './shield-checkmark-filled.svg';

import type {Icon} from '../type';
export const ShieldCheckmarkFilled = (props: Icon) => (
	<ShieldCheckmarkFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
