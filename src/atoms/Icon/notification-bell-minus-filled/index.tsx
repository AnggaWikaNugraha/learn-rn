import React from 'react';

import NotificationBellMinusFilledIcon from './notification-bell-minus-filled.svg';

import type {Icon} from '../type';
export const NotificationBellMinusFilled = (props: Icon) => (
	<NotificationBellMinusFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
