import React from 'react';

import UmbrellaFilledIcon from './umbrella-filled.svg';

import type {Icon} from '../type';
export const UmbrellaFilled = (props: Icon) => (
	<UmbrellaFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
