import React from 'react';

import EmailAlternateIcon from './email-alternate.svg';

import type {Icon} from '../type';
export const EmailAlternate = (props: Icon) => (
	<EmailAlternateIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
