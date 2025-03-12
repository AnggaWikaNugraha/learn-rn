import React from 'react';

import NotificationActiveIcon from './notification-active.svg';

import type {Icon} from '../type';
export const NotificationActive = (props: Icon) => (
	<NotificationActiveIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
