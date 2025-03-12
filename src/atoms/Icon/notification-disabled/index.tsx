import React from 'react';

import NotificationDisabledIcon from './notification-disabled.svg';

import type {Icon} from '../type';
export const NotificationDisabled = (props: Icon) => (
	<NotificationDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
