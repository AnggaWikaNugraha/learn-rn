import React from 'react';

import WarningCircleIcon from './warning-circle.svg';

import type {Icon} from '../type';
export const WarningCircle = (props: Icon) => (
	<WarningCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
