import React from 'react';

import HourglassFilledIcon from './hourglass-filled.svg';

import type {Icon} from '../type';
export const HourglassFilled = (props: Icon) => (
	<HourglassFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
