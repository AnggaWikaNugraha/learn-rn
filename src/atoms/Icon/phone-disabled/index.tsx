import React from 'react';

import PhoneDisabledIcon from './phone-disabled.svg';

import type {Icon} from '../type';
export const PhoneDisabled = (props: Icon) => (
	<PhoneDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
