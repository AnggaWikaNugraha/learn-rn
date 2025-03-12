import React from 'react';

import EmailNotificationFilledIcon from './email-notification-filled.svg';

import type {Icon} from '../type';
export const EmailNotificationFilled = (props: Icon) => (
	<EmailNotificationFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
