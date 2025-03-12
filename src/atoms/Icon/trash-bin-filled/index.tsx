import React from 'react';

import TrashBinFilledIcon from './trash-bin-filled.svg';

import type {Icon} from '../type';
export const TrashBinFilled = (props: Icon) => (
	<TrashBinFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
