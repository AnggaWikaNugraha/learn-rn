import React from 'react';

import ZoomOutFilledIcon from './zoom-out-filled.svg';

import type {Icon} from '../type';
export const ZoomOutFilled = (props: Icon) => (
	<ZoomOutFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
