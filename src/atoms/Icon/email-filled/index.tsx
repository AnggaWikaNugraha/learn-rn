import React from 'react';

import EmailFilledIcon from './email-filled.svg';

import type {Icon} from '../type';
export const EmailFilled = (props: Icon) => (
	<EmailFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
