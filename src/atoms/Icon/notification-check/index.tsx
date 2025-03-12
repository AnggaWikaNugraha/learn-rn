import React from 'react';

import NotificationCheckIcon from './notification-check.svg';

import type {Icon} from '../type';
export const NotificationCheck = (props: Icon) => (
	<NotificationCheckIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
