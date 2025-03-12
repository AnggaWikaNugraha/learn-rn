import React from 'react';

import PlusCircleFilledIcon from './plus-circle-filled.svg';

import type {Icon} from '../type';
export const PlusCircleFilled = (props: Icon) => (
	<PlusCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
