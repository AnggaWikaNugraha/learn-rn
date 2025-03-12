import React from 'react';

import FavoriteFilledIcon from './favorite-filled.svg';

import type {Icon} from '../type';
export const FavoriteFilled = (props: Icon) => (
	<FavoriteFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
