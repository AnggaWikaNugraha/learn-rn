import React from 'react';

import Receipt2Icon from './receipt-2.svg';

import type {Icon} from '../type';
export const Receipt2 = (props: Icon) => (
	<Receipt2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
