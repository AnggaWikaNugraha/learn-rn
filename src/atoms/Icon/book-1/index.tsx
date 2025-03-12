import React from 'react';

import Book1Icon from './book-1.svg';

import type {Icon} from '../type';
export const Book1 = (props: Icon) => (
	<Book1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
