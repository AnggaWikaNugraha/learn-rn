import React from 'react';

import Home1Icon from './home-1.svg';

import type {Icon} from '../type';
export const Home1 = (props: Icon) => (
	<Home1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
