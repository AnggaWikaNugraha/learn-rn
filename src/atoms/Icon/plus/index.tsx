import React from 'react';

import PlusIcon from './plus.svg';

import type {Icon} from '../type';
export const Plus = (props: Icon) => (
	<PlusIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
