import React from 'react';

import PlusCircleIcon from './plus-circle.svg';

import type {Icon} from '../type';
export const PlusCircle = (props: Icon) => (
	<PlusCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
