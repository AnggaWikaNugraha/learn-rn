import React from 'react';

import NotificationCancelIcon from './notification-cancel.svg';

import type {Icon} from '../type';
export const NotificationCancel = (props: Icon) => (
	<NotificationCancelIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
