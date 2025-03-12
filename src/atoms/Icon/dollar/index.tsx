import React from 'react';

import DollarIcon from './dollar.svg';

import type {Icon} from '../type';
export const Dollar = (props: Icon) => (
	<DollarIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
