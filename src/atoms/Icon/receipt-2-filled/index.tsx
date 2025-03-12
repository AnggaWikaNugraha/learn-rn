import React from 'react';

import Receipt2FilledIcon from './receipt-2-filled.svg';

import type {Icon} from '../type';
export const Receipt2Filled = (props: Icon) => (
	<Receipt2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
