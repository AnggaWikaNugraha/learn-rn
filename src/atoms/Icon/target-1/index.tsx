import React from 'react';

import Target1Icon from './target-1.svg';

import type {Icon} from '../type';
export const Target1 = (props: Icon) => (
	<Target1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
