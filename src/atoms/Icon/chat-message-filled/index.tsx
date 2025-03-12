import React from 'react';

import ChatMessageFilledIcon from './chat-message-filled.svg';

import type {Icon} from '../type';
export const ChatMessageFilled = (props: Icon) => (
	<ChatMessageFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
