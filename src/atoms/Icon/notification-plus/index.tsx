import React from 'react';

import NotificationPlusIcon from './notification-plus.svg';

import type {Icon} from '../type';
export const NotificationPlus = (props: Icon) => (
	<NotificationPlusIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
