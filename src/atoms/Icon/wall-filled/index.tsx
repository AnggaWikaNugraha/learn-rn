import React from 'react';

import WallFilledIcon from './wall-filled.svg';

import type {Icon} from '../type';
export const WallFilled = (props: Icon) => (
	<WallFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
