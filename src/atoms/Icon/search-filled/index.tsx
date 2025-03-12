import React from 'react';

import SearchFilledIcon from './search-filled.svg';

import type {Icon} from '../type';
export const SearchFilled = (props: Icon) => (
	<SearchFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
