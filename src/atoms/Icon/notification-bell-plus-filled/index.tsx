import React from 'react';

import NotificationBellPlusFilledIcon from './notification-bell-plus-filled.svg';

import type {Icon} from '../type';
export const NotificationBellPlusFilled = (props: Icon) => (
	<NotificationBellPlusFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
