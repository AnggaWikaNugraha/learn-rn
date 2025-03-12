import React from 'react';

import EmailAttachIcon from './email-attach.svg';

import type {Icon} from '../type';
export const EmailAttach = (props: Icon) => (
	<EmailAttachIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
