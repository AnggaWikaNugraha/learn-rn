import React from 'react';

import SearchIcon from './search.svg';

import type {Icon} from '../type';
export const Search = (props: Icon) => (
	<SearchIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
