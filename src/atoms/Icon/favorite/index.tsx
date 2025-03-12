import React from 'react';

import FavoriteIcon from './favorite.svg';

import type {Icon} from '../type';
export const Favorite = (props: Icon) => (
	<FavoriteIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
