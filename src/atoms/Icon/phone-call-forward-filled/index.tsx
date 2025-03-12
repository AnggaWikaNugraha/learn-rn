import React from 'react';

import PhoneCallForwardFilledIcon from './phone-call-forward-filled.svg';

import type {Icon} from '../type';
export const PhoneCallForwardFilled = (props: Icon) => (
	<PhoneCallForwardFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
