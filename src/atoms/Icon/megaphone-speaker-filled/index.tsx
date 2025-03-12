import React from 'react';

import MegaphoneSpeakerFilledIcon from './megaphone-speaker-filled.svg';

import type {Icon} from '../type';
export const MegaphoneSpeakerFilled = (props: Icon) => (
	<MegaphoneSpeakerFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
