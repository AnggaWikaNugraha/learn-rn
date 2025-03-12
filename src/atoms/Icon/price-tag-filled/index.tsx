import React from 'react';

import PriceTagFilledIcon from './price-tag-filled.svg';

import type {Icon} from '../type';
export const PriceTagFilled = (props: Icon) => (
	<PriceTagFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
