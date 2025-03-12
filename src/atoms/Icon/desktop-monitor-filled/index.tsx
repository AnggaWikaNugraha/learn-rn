import React from 'react';

import DesktopMonitorFilledIcon from './desktop-monitor-filled.svg';

import type {Icon} from '../type';
export const DesktopMonitorFilled = (props: Icon) => (
	<DesktopMonitorFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
