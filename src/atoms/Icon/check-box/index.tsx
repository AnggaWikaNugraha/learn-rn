import React from 'react';

import CheckBoxIcon from './check-box.svg';

import type {Icon} from '../type';
export const CheckBox = (props: Icon) => (
	<CheckBoxIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
