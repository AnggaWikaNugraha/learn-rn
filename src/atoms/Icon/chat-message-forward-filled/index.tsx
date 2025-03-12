import React from 'react';

import ChatMessageForwardFilledIcon from './chat-message-forward-filled.svg';

import type {Icon} from '../type';
export const ChatMessageForwardFilled = (props: Icon) => (
	<ChatMessageForwardFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
