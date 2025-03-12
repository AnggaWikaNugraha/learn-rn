import React from 'react';

import TrashBinIcon from './trash-bin.svg';

import type {Icon} from '../type';
export const TrashBin = (props: Icon) => (
	<TrashBinIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
