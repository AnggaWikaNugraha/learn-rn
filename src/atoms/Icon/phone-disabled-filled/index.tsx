import React from 'react';

import PhoneDisabledFilledIcon from './phone-disabled-filled.svg';

import type {Icon} from '../type';
export const PhoneDisabledFilled = (props: Icon) => (
	<PhoneDisabledFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
