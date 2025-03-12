import React from 'react';

import SearchChekcmarkIcon from './search-chekcmark.svg';

import type {Icon} from '../type';
export const SearchChekcmark = (props: Icon) => (
	<SearchChekcmarkIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
