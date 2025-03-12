import React from 'react';

import PlayFilledIcon from './play-filled.svg';

import type {Icon} from '../type';
export const PlayFilled = (props: Icon) => (
	<PlayFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
