import React from 'react';

import WarningTriangleIcon from './warning-triangle.svg';

import type {Icon} from '../type';
export const WarningTriangle = (props: Icon) => (
	<WarningTriangleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
