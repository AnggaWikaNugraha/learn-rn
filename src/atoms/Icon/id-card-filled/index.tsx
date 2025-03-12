import React from 'react';

import IdCardFilledIcon from './id-card-filled.svg';

import type {Icon} from '../type';
export const IdCardFilled = (props: Icon) => (
	<IdCardFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
