import React from 'react';

import Location1Icon from './location-1.svg';

import type {Icon} from '../type';
export const Location1 = (props: Icon) => (
	<Location1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
