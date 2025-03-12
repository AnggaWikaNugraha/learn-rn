import React from 'react';

import SearchOffIcon from './search-off.svg';

import type {Icon} from '../type';
export const SearchOff = (props: Icon) => (
	<SearchOffIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
