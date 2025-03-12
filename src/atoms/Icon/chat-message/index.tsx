import React from 'react';

import ChatMessageIcon from './chat-message.svg';

import type {Icon} from '../type';
export const ChatMessage = (props: Icon) => (
	<ChatMessageIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
