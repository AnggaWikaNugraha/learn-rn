import React from 'react';

import ZoomInFilledIcon from './zoom-in-filled.svg';

import type {Icon} from '../type';
export const ZoomInFilled = (props: Icon) => (
	<ZoomInFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
