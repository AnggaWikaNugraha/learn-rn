import React from 'react';

import WarningTriangleFilledIcon from './warning-triangle-filled.svg';

import type {Icon} from '../type';
export const WarningTriangleFilled = (props: Icon) => (
	<WarningTriangleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
