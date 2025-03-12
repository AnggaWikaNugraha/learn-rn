import React from 'react';

import PhoneSettingsFilledIcon from './phone-settings-filled.svg';

import type {Icon} from '../type';
export const PhoneSettingsFilled = (props: Icon) => (
	<PhoneSettingsFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
