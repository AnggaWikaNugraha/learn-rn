import React from 'react';

import ChatMessageNotificationFilledIcon from './chat-message-notification-filled.svg';

import type {Icon} from '../type';
export const ChatMessageNotificationFilled = (props: Icon) => (
	<ChatMessageNotificationFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
