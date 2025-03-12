import React from 'react';

import FlashOffFilledIcon from './flash-off-filled.svg';

import type {Icon} from '../type';
export const FlashOffFilled = (props: Icon) => (
	<FlashOffFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
