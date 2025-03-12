import React from 'react';

import Headphone1Icon from './headphone-1.svg';

import type {Icon} from '../type';
export const Headphone1 = (props: Icon) => (
	<Headphone1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
