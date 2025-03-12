import React from 'react';

import UnfoldMoreIcon from './unfold-more.svg';

import type {Icon} from '../type';
export const UnfoldMore = (props: Icon) => (
	<UnfoldMoreIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
