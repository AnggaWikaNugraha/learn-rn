import React from 'react';

import Shield1Icon from './shield-1.svg';

import type {Icon} from '../type';
export const Shield1 = (props: Icon) => (
	<Shield1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
