import React from 'react';

import RefreshRightRedoIcon from './refresh-right-redo.svg';

import type {Icon} from '../type';
export const RefreshRightRedo = (props: Icon) => (
	<RefreshRightRedoIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
