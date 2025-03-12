import React from 'react';

import CheckBoxBlankIcon from './check-box-blank.svg';

import type {Icon} from '../type';
export const CheckBoxBlank = (props: Icon) => (
	<CheckBoxBlankIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
