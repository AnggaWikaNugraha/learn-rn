import React from 'react';

import ChatBubbleFilledIcon from './chat-bubble-filled.svg';

import type {Icon} from '../type';
export const ChatBubbleFilled = (props: Icon) => (
	<ChatBubbleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
