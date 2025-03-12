import React from 'react';

import VideoPlayerFilledIcon from './video-player-filled.svg';

import type {Icon} from '../type';
export const VideoPlayerFilled = (props: Icon) => (
	<VideoPlayerFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
