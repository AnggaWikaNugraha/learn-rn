import React from 'react';

import DocumentFilledIcon from './document-filled.svg';

import type {Icon} from '../type';
export const DocumentFilled = (props: Icon) => (
	<DocumentFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
