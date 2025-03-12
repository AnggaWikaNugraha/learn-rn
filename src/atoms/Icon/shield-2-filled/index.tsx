import React from 'react';

import Shield2FilledIcon from './shield-2-filled.svg';

import type {Icon} from '../type';
export const Shield2Filled = (props: Icon) => (
	<Shield2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
