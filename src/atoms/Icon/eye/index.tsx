import React from 'react';

import EyeIcon from './eye.svg';

import type {Icon} from '../type';
export const Eye = (props: Icon) => (
	<EyeIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
