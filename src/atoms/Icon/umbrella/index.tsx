import React from 'react';

import UmbrellaIcon from './umbrella.svg';

import type {Icon} from '../type';
export const Umbrella = (props: Icon) => (
	<UmbrellaIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
