import React from 'react';

import NotificationBellCancelFilledIcon from './notification-bell-cancel-filled.svg';

import type {Icon} from '../type';
export const NotificationBellCancelFilled = (props: Icon) => (
	<NotificationBellCancelFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
