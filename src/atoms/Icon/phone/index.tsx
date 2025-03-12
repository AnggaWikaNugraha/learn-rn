import React from 'react';

import PhoneIcon from './phone.svg';

import type {Icon} from '../type';
export const Phone = (props: Icon) => (
	<PhoneIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
