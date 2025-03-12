import React from 'react';

import Glasses2Icon from './glasses-2.svg';

import type {Icon} from '../type';
export const Glasses2 = (props: Icon) => (
	<Glasses2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
