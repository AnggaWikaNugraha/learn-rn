import React from 'react';

import VideoPlayerIcon from './video-player.svg';

import type {Icon} from '../type';
export const VideoPlayer = (props: Icon) => (
	<VideoPlayerIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
