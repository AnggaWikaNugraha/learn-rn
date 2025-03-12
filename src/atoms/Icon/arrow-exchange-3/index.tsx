import React from 'react';

import ArrowExchange3Icon from './arrow-exchange-3.svg';

import type {Icon} from '../type';
export const ArrowExchange3 = (props: Icon) => (
	<ArrowExchange3Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
