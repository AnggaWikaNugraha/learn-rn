import React from 'react';

import FlashOnFilledIcon from './flash-on-filled.svg';

import type {Icon} from '../type';
export const FlashOnFilled = (props: Icon) => (
	<FlashOnFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
