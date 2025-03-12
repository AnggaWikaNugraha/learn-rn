import React from 'react';

import EmailIcon from './email.svg';

import type {Icon} from '../type';
export const Email = (props: Icon) => (
	<EmailIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
