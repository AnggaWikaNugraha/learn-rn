import React from 'react';

import FilmReelFilledIcon from './film-reel-filled.svg';

import type {Icon} from '../type';
export const FilmReelFilled = (props: Icon) => (
	<FilmReelFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
