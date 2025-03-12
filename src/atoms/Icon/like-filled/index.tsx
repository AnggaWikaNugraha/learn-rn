import React from 'react';

import LikeFilledIcon from './like-filled.svg';

import type {Icon} from '../type';
export const LikeFilled = (props: Icon) => (
	<LikeFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
