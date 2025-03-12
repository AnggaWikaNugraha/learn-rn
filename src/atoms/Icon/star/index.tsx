import React from 'react';

import StarIcon from './star.svg';

import type {Icon} from '../type';
export const Star = (props: Icon) => (
	<StarIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
