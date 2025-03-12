import React from 'react';

import PresentIcon from './present.svg';

import type {Icon} from '../type';
export const Present = (props: Icon) => (
	<PresentIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
