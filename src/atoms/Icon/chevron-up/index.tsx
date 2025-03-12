import React from 'react';

import ChevronUpIcon from './chevron-up.svg';

import type {Icon} from '../type';
export const ChevronUp = (props: Icon) => (
	<ChevronUpIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
