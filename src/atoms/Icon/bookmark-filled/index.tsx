import React from 'react';

import BookmarkFilledIcon from './bookmark-filled.svg';

import type {Icon} from '../type';
export const BookmarkFilled = (props: Icon) => (
	<BookmarkFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
