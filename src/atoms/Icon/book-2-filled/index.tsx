import React from 'react';

import Book2FilledIcon from './book-2-filled.svg';

import type {Icon} from '../type';
export const Book2Filled = (props: Icon) => (
	<Book2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
