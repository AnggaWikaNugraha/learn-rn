import React from 'react';

import ZoomInIcon from './zoom-in.svg';

import type {Icon} from '../type';
export const ZoomIn = (props: Icon) => (
	<ZoomInIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
