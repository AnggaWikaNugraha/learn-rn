import React from 'react';

import EmailNotificationIcon from './email-notification.svg';

import type {Icon} from '../type';
export const EmailNotification = (props: Icon) => (
	<EmailNotificationIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
