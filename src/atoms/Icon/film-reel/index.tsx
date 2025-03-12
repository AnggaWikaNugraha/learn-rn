import React from 'react';

import FilmReelIcon from './film-reel.svg';

import type {Icon} from '../type';
export const FilmReel = (props: Icon) => (
	<FilmReelIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
