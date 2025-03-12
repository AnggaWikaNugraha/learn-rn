import React from 'react';

import PlusBoxIcon from './plus-box.svg';

import type {Icon} from '../type';
export const PlusBox = (props: Icon) => (
	<PlusBoxIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
