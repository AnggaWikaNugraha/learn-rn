import React from 'react';

import Shield2Icon from './shield-2.svg';

import type {Icon} from '../type';
export const Shield2 = (props: Icon) => (
	<Shield2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
