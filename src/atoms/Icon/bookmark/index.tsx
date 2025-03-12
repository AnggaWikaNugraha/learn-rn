import React from 'react';

import BookmarkIcon from './bookmark.svg';

import type {Icon} from '../type';
export const Bookmark = (props: Icon) => (
	<BookmarkIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
