import React from 'react';

import ScreenFilledIcon from './screen-filled.svg';

import type {Icon} from '../type';
export const ScreenFilled = (props: Icon) => (
	<ScreenFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
