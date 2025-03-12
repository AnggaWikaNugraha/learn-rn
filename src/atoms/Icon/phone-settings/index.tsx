import React from 'react';

import PhoneSettingsIcon from './phone-settings.svg';

import type {Icon} from '../type';
export const PhoneSettings = (props: Icon) => (
	<PhoneSettingsIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
