import React from 'react';

import StarFilledIcon from './star-filled.svg';

import type {Icon} from '../type';
export const StarFilled = (props: Icon) => (
	<StarFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
