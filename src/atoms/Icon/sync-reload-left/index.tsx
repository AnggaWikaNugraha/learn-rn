import React from 'react';

import SyncReloadLeftIcon from './sync-reload-left.svg';

import type {Icon} from '../type';
export const SyncReloadLeft = (props: Icon) => (
	<SyncReloadLeftIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
