import React from 'react';

import PhoneInTalkIcon from './phone-in-talk.svg';

import type {Icon} from '../type';
export const PhoneInTalk = (props: Icon) => (
	<PhoneInTalkIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
