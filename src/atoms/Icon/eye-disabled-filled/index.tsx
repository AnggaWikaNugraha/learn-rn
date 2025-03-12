import React from 'react';

import EyeDisabledFilledIcon from './eye-disabled-filled.svg';

import type {Icon} from '../type';
export const EyeDisabledFilled = (props: Icon) => (
	<EyeDisabledFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
