import React from 'react';

import Tax1FilledIcon from './tax-1-filled.svg';

import type {Icon} from '../type';
export const Tax1Filled = (props: Icon) => (
	<Tax1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
