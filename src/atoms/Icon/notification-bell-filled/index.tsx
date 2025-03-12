import React from 'react';

import NotificationBellFilledIcon from './notification-bell-filled.svg';

import type {Icon} from '../type';
export const NotificationBellFilled = (props: Icon) => (
	<NotificationBellFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
