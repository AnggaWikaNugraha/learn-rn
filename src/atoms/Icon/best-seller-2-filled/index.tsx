import React from 'react';

import BestSeller2FilledIcon from './best-seller-2-filled.svg';

import type {Icon} from '../type';
export const BestSeller2Filled = (props: Icon) => (
	<BestSeller2FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
