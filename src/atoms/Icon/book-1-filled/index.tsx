import React from 'react';

import Book1FilledIcon from './book-1-filled.svg';

import type {Icon} from '../type';
export const Book1Filled = (props: Icon) => (
	<Book1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
