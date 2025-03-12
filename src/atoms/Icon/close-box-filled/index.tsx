import React from 'react';

import CloseBoxFilledIcon from './close-box-filled.svg';

import type {Icon} from '../type';
export const CloseBoxFilled = (props: Icon) => (
	<CloseBoxFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
