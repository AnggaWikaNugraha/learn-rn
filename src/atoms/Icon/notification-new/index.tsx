import React from 'react';

import NotificationNewIcon from './notification-new.svg';

import type {Icon} from '../type';
export const NotificationNew = (props: Icon) => (
	<NotificationNewIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
