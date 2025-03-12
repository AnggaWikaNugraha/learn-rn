import React from 'react';

import Glasses2FilledIcon from './glasses-2-filled.svg';

import type {Icon} from '../type';
export const Glasses2Filled = (props: Icon) => (
	<Glasses2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
