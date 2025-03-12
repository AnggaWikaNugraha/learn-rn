import React from 'react';

import Music2Icon from './music-2.svg';

import type {Icon} from '../type';
export const Music2 = (props: Icon) => (
	<Music2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
