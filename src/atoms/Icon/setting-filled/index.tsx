import React from 'react';

import SettingFilledIcon from './setting-filled.svg';

import type {Icon} from '../type';
export const SettingFilled = (props: Icon) => (
	<SettingFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
