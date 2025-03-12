import React from 'react';

import MinusCircleFilledIcon from './minus-circle-filled.svg';

import type {Icon} from '../type';
export const MinusCircleFilled = (props: Icon) => (
	<MinusCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
