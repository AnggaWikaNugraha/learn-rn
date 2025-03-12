import React from 'react';

import RefreshLeftUndoIcon from './refresh-left-undo.svg';

import type {Icon} from '../type';
export const RefreshLeftUndo = (props: Icon) => (
	<RefreshLeftUndoIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
