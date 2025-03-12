import React from 'react';

import ChatMessageReadIcon from './chat-message-read.svg';

import type {Icon} from '../type';
export const ChatMessageRead = (props: Icon) => (
	<ChatMessageReadIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
