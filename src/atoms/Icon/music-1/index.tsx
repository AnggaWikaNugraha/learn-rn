import React from 'react';

import Music1Icon from './music-1.svg';

import type {Icon} from '../type';
export const Music1 = (props: Icon) => (
	<Music1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
