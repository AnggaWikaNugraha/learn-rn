import React from 'react';

import PhoneFilledIcon from './Phone-filled.svg';

import type {Icon} from '../type';
export const PhoneFilled = (props: Icon) => (
	<PhoneFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
