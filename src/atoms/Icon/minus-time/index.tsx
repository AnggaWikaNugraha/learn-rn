import React from 'react';

import MinusTimeIcon from './minus-time.svg';

import type {Icon} from '../type';
export const MinusTime = (props: Icon) => (
	<MinusTimeIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
