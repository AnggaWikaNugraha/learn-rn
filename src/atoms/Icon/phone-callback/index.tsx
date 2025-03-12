import React from 'react';

import PhoneCallbackIcon from './phone-callback.svg';

import type {Icon} from '../type';
export const PhoneCallback = (props: Icon) => (
	<PhoneCallbackIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
