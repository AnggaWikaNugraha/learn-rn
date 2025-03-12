import React from 'react';

import LaunchFilledIcon from './launch-filled.svg';

import type {Icon} from '../type';
export const LaunchFilled = (props: Icon) => (
	<LaunchFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
