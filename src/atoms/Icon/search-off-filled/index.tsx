import React from 'react';

import SearchOffFilledIcon from './search-off-filled.svg';

import type {Icon} from '../type';
export const SearchOffFilled = (props: Icon) => (
	<SearchOffFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
