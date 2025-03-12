import React from 'react';

import PhonePauseFilledIcon from './phone-pause-filled.svg';

import type {Icon} from '../type';
export const PhonePauseFilled = (props: Icon) => (
	<PhonePauseFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
