import React from 'react';

import BlockIcon from './block.svg';

import type {Icon} from '../type';
export const Block = (props: Icon) => (
	<BlockIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
