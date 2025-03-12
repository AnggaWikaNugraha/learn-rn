import React from 'react';

import WarningFilledIcon from './warning-filled.svg';

import type {Icon} from '../type';
export const WarningFilled = (props: Icon) => (
	<WarningFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
