import React from 'react';

import CheckBoxFilledIcon from './check-box-filled.svg';

import type {Icon} from '../type';
export const CheckBoxFilled = (props: Icon) => (
	<CheckBoxFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
