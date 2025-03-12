import React from 'react';

import BestSeller2Icon from './best-seller-2.svg';

import type {Icon} from '../type';
export const BestSeller2 = (props: Icon) => (
	<BestSeller2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
