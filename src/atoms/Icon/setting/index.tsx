import React from 'react';

import SettingIcon from './setting.svg';

import type {Icon} from '../type';
export const Setting = (props: Icon) => (
	<SettingIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
