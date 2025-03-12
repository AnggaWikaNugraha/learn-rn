import React from 'react';

import PlusBoxFilledIcon from './plus-box-filled.svg';

import type {Icon} from '../type';
export const PlusBoxFilled = (props: Icon) => (
	<PlusBoxFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
