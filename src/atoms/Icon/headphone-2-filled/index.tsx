import React from 'react';

import Headphone2FilledIcon from './headphone-2-filled.svg';

import type {Icon} from '../type';
export const Headphone2Filled = (props: Icon) => (
	<Headphone2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
