import React from 'react';

import VideoFilledIcon from './video-filled.svg';

import type {Icon} from '../type';
export const VideoFilled = (props: Icon) => (
	<VideoFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
