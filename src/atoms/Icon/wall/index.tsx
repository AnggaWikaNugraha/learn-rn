import React from 'react';

import WallIcon from './wall.svg';

import type {Icon} from '../type';
export const Wall = (props: Icon) => (
	<WallIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
