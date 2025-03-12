import React from 'react';

import BestSeller1FilledIcon from './best-seller-1-filled.svg';

import type {Icon} from '../type';
export const BestSeller1Filled = (props: Icon) => (
	<BestSeller1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
