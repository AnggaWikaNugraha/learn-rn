import React from 'react';

import CloseBoxIcon from './close-box.svg';

import type {Icon} from '../type';
export const CloseBox = (props: Icon) => (
	<CloseBoxIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
