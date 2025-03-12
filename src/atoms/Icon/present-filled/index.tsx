import React from 'react';

import PresentFilledIcon from './present-filled.svg';

import type {Icon} from '../type';
export const PresentFilled = (props: Icon) => (
	<PresentFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
