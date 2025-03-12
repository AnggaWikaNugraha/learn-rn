import React from 'react';

import FilterIcon from './filter.svg';

import type {Icon} from '../type';
export const Filter = (props: Icon) => (
	<FilterIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
