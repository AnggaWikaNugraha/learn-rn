import React from 'react';

import FlashOffIcon from './flash-off.svg';

import type {Icon} from '../type';
export const FlashOff = (props: Icon) => (
	<FlashOffIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
