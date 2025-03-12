import React from 'react';

import BroadcastIcon from './broadcast.svg';

import type {Icon} from '../type';
export const Broadcast = (props: Icon) => (
	<BroadcastIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
