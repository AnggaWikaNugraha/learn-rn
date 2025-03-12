import React from 'react';

import SecurityIcon from './security.svg';

import type {Icon} from '../type';
export const Security = (props: Icon) => (
	<SecurityIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
