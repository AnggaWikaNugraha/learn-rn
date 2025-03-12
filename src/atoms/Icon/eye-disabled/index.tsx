import React from 'react';

import EyeDisabledIcon from './eye-disabled.svg';

import type {Icon} from '../type';
export const EyeDisabled = (props: Icon) => (
	<EyeDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
