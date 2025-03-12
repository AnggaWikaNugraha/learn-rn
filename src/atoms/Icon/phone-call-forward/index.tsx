import React from 'react';

import PhoneCallForwardIcon from './phone-call-forward.svg';

import type {Icon} from '../type';
export const PhoneCallForward = (props: Icon) => (
	<PhoneCallForwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
