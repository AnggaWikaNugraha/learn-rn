import React from 'react';

import PictureImage2Icon from './picture-image-2.svg';

import type {Icon} from '../type';
export const PictureImage2 = (props: Icon) => (
	<PictureImage2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
