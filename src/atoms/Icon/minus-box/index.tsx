import React from 'react';

import MinusBoxIcon from './minus-box.svg';

import type {Icon} from '../type';
export const MinusBox = (props: Icon) => (
	<MinusBoxIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
