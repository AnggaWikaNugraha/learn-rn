import React from 'react';

import BestSeller1Icon from './best-seller-1.svg';

import type {Icon} from '../type';
export const BestSeller1 = (props: Icon) => (
	<BestSeller1Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
