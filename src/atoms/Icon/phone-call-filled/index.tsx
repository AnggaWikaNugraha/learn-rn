import React from 'react';

import PhoneCallFilledIcon from './phone-call-filled.svg';

import type {Icon} from '../type';
export const PhoneCallFilled = (props: Icon) => (
	<PhoneCallFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
