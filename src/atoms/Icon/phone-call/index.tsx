import React from 'react';

import PhoneCallIcon from './phone-call.svg';

import type {Icon} from '../type';
export const PhoneCall = (props: Icon) => (
	<PhoneCallIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
