import React from 'react';

import NotificationBellDisabledFilledIcon from './notification-bell-disabled-filled.svg';

import type {Icon} from '../type';
export const NotificationBellDisabledFilled = (props: Icon) => (
	<NotificationBellDisabledFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
