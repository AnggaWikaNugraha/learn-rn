import React from 'react';

import VideoIcon from './video.svg';

import type {Icon} from '../type';
export const Video = (props: Icon) => (
	<VideoIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
