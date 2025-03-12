import React from 'react';

import PhonePauseIcon from './phone-pause.svg';

import type {Icon} from '../type';
export const PhonePause = (props: Icon) => (
	<PhonePauseIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
