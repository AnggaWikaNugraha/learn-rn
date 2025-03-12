import React from 'react';

import CheckBoxBlankFilledIcon from './check-box-blank-filled.svg';

import type {Icon} from '../type';
export const CheckBoxBlankFilled = (props: Icon) => (
	<CheckBoxBlankFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
