import React from 'react';

import Tax1Icon from './tax-1.svg';

import type {Icon} from '../type';
export const Tax1 = (props: Icon) => (
	<Tax1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
