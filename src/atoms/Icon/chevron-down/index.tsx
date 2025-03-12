import React from 'react';

import ChevronDownIcon from './chevron-down.svg';

import type {Icon} from '../type';
export const ChevronDown = (props: Icon) => (
	<ChevronDownIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
