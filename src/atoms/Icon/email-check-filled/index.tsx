import React from 'react';

import EmailCheckFilledIcon from './email-check-filled.svg';

import type {Icon} from '../type';
export const EmailCheckFilled = (props: Icon) => (
	<EmailCheckFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
