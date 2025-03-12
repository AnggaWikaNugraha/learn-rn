import React from 'react';

import CircleCloseFilledIcon from './circle-close-filled.svg';

import type {Icon} from '../type';
export const CircleCloseFilled = (props: Icon) => (
	<CircleCloseFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
