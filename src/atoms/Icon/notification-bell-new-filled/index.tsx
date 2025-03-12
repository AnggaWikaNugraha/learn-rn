import React from 'react';

import NotificationBellNewFilledIcon from './notification-bell-new-filled.svg';

import type {Icon} from '../type';
export const NotificationBellNewFilled = (props: Icon) => (
	<NotificationBellNewFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
