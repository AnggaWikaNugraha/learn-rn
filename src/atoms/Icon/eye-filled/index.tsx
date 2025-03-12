import React from 'react';

import EyeFilledIcon from './eye-filled.svg';

import type {Icon} from '../type';
export const EyeFilled = (props: Icon) => (
	<EyeFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
