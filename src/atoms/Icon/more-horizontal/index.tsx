import React from 'react';

import MoreHorizontalIcon from './more-horizontal.svg';

import type {Icon} from '../type';
export const MoreHorizontal = (props: Icon) => (
	<MoreHorizontalIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
