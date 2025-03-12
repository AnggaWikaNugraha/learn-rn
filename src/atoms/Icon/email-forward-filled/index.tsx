import React from 'react';

import EmailForwardFilledIcon from './email-forward-filled.svg';

import type {Icon} from '../type';
export const EmailForwardFilled = (props: Icon) => (
	<EmailForwardFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
