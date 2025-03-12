import React from 'react';

import MinusIcon from './minus.svg';

import type {Icon} from '../type';
export const Minus = (props: Icon) => (
	<MinusIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
