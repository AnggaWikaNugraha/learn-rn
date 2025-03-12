import React from 'react';

import CircleProcessFilledIcon from './circle-process-filled.svg';

import type {Icon} from '../type';
export const CircleProcessFilled = (props: Icon) => (
	<CircleProcessFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
