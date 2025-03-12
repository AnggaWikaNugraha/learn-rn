import React from 'react';

import ArrowExchange1Icon from './arrow-exchange-1.svg';

import type {Icon} from '../type';
export const ArrowExchange1 = (props: Icon) => (
	<ArrowExchange1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
