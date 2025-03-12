import React from 'react';

import ChatBubbleIcon from './chat-bubble.svg';

import type {Icon} from '../type';
export const ChatBubble = (props: Icon) => (
	<ChatBubbleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
