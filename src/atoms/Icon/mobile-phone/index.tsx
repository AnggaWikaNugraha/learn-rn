import React from 'react';

import MobilePhoneIcon from './mobile-phone.svg';

import type {Icon} from '../type';
export const MobilePhone = (props: Icon) => (
	<MobilePhoneIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
