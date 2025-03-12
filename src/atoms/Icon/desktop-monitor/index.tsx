import React from 'react';

import DesktopMonitorIcon from './desktop-monitor.svg';

import type {Icon} from '../type';
export const DesktopMonitor = (props: Icon) => (
	<DesktopMonitorIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
