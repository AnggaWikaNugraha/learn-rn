import React from 'react';

import Glasses1FilledIcon from './glasses-1-filled.svg';

import type {Icon} from '../type';
export const Glasses1Filled = (props: Icon) => (
	<Glasses1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
