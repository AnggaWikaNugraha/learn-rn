import React from 'react';

import CloseIcon from './close.svg';

import type {Icon} from '../type';
export const Close = (props: Icon) => (
	<CloseIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
