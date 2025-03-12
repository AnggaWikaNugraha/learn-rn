import React from 'react';

import ChatMessageNotificationIcon from './chat-message-notification.svg';

import type {Icon} from '../type';
export const ChatMessageNotification = (props: Icon) => (
	<ChatMessageNotificationIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
