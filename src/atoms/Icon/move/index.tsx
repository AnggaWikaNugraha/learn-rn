import React from 'react';

import MoveIcon from './move.svg';

import type {Icon} from '../type';
export const Move = (props: Icon) => (
	<MoveIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
