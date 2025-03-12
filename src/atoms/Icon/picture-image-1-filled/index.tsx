import React from 'react';

import PictureImage1FilledIcon from './picture-image-1-filled.svg';

import type {Icon} from '../type';
export const PictureImage1Filled = (props: Icon) => (
	<PictureImage1FilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
