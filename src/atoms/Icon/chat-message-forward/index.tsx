import React from 'react';

import ChatMessageForwardIcon from './chat-message-forward.svg';

import type {Icon} from '../type';
export const ChatMessageForward = (props: Icon) => (
	<ChatMessageForwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
