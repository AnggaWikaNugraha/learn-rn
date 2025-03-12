import React from 'react';

import MegaphoneSpeakerIcon from './megaphone-speaker.svg';

import type {Icon} from '../type';
export const MegaphoneSpeaker = (props: Icon) => (
	<MegaphoneSpeakerIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
