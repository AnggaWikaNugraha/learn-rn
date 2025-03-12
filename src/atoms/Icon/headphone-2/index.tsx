import React from 'react';

import Headphone2Icon from './headphone-2.svg';

import type {Icon} from '../type';
export const Headphone2 = (props: Icon) => (
	<Headphone2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
