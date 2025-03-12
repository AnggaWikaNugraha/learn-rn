import React from 'react';

import NotificationBellCheckFilledIcon from './notification-bell-check-filled.svg';

import type {Icon} from '../type';
export const NotificationBellCheckFilled = (props: Icon) => (
	<NotificationBellCheckFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
