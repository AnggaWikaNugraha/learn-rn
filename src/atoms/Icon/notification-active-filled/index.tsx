import React from 'react';

import NotificationActiveFilledIcon from './notification-active-filled.svg';

import type {Icon} from '../type';
export const NotificationActiveFilled = (props: Icon) => (
	<NotificationActiveFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
