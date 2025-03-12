import React from 'react';

import Home1FilledIcon from './home-1-filled.svg';

import type {Icon} from '../type';
export const Home1Filled = (props: Icon) => (
	<Home1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
