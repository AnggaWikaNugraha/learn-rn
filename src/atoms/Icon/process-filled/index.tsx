import React from 'react';

import ProcessFilledIcon from './process-filled.svg';

import type {Icon} from '../type';
export const ProcessFilled = (props: Icon) => (
	<ProcessFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
