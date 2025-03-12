import React from 'react';

import SearchChekcmarkFilledIcon from './search-chekcmark-filled.svg';

import type {Icon} from '../type';
export const SearchChekcmarkFilled = (props: Icon) => (
	<SearchChekcmarkFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
