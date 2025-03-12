import React from 'react';

import EmailAttachFilledIcon from './email-attach-filled.svg';

import type {Icon} from '../type';
export const EmailAttachFilled = (props: Icon) => (
	<EmailAttachFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
