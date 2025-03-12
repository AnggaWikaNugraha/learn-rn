import React from 'react';

import History2Icon from './history-2.svg';

import type {Icon} from '../type';
export const History2 = (props: Icon) => (
	<History2Icon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
