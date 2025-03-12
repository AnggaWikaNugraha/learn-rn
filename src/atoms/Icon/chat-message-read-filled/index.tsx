import React from 'react';

import ChatMessageReadFilledIcon from './chat-message-read-filled.svg';

import type {Icon} from '../type';
export const ChatMessageReadFilled = (props: Icon) => (
	<ChatMessageReadFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
