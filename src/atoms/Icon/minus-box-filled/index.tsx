import React from 'react';

import MinusBoxFilledIcon from './minus-box-filled.svg';

import type {Icon} from '../type';
export const MinusBoxFilled = (props: Icon) => (
	<MinusBoxFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
