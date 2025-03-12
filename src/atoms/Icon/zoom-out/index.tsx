import React from 'react';

import ZoomOutIcon from './zoom-out.svg';

import type {Icon} from '../type';
export const ZoomOut = (props: Icon) => (
	<ZoomOutIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
