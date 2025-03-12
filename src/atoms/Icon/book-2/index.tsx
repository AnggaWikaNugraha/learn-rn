import React from 'react';

import Book2Icon from './book-2.svg';

import type {Icon} from '../type';
export const Book2 = (props: Icon) => (
	<Book2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
