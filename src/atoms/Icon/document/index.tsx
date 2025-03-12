import React from 'react';

import DocumentIcon from './document.svg';

import type {Icon} from '../type';
export const Document = (props: Icon) => (
	<DocumentIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
