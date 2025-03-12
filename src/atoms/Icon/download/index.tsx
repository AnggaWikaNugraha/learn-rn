import React from 'react';

import DownloadIcon from './download.svg';

import type {Icon} from '../type';
export const Download = (props: Icon) => (
	<DownloadIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
