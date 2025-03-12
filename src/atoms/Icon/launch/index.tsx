import React from 'react';

import LaunchIcon from './launch.svg';

import type {Icon} from '../type';
export const Launch = (props: Icon) => (
	<LaunchIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
