import React from 'react';

import MortageIcon from './mortage.svg';

import type {Icon} from '../type';
export const Mortage = (props: Icon) => (
	<MortageIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
