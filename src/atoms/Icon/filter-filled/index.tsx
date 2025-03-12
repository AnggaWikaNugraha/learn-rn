import React from 'react';

import FilterFilledIcon from './filter-filled.svg';

import type {Icon} from '../type';
export const FilterFilled = (props: Icon) => (
	<FilterFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
