import React from 'react';

import Glasses1Icon from './glasses-1.svg';

import type {Icon} from '../type';
export const Glasses1 = (props: Icon) => (
	<Glasses1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
