import React from 'react';

import Target2Icon from './target-2.svg';

import type {Icon} from '../type';
export const Target2 = (props: Icon) => (
	<Target2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
