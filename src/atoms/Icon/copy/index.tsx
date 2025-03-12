import React from 'react';

import CopyIcon from './copy.svg';

import type {Icon} from '../type';
export const Copy = (props: Icon) => (
	<CopyIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
