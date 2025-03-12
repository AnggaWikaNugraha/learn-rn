import React from 'react';

import NotificationBellIcon from './notification-bell.svg';

import type {Icon} from '../type';
export const NotificationBell = (props: Icon) => (
	<NotificationBellIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
