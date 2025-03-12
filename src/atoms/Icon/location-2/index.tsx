import React from 'react';

import Location2Icon from './location-2.svg';

import type {Icon} from '../type';
export const Location2 = (props: Icon) => (
	<Location2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
