import React from 'react';

import PhoneCallbackFilledIcon from './phone-callback-filled.svg';

import type {Icon} from '../type';
export const PhoneCallbackFilled = (props: Icon) => (
	<PhoneCallbackFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
