import React from 'react';

import EmailCheckIcon from './email-check.svg';

import type {Icon} from '../type';
export const EmailCheck = (props: Icon) => (
	<EmailCheckIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
