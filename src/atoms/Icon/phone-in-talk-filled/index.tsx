import React from 'react';

import PhoneInTalkFilledIcon from './phone-in-talk-filled.svg';

import type {Icon} from '../type';
export const PhoneInTalkFilled = (props: Icon) => (
	<PhoneInTalkFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
