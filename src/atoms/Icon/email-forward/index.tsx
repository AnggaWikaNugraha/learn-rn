import React from 'react';

import EmailForwardIcon from './email-forward.svg';

import type {Icon} from '../type';
export const EmailForward = (props: Icon) => (
	<EmailForwardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
