import React from 'react';

import YenIcon from './yen.svg';

import type {Icon} from '../type';
export const Yen = (props: Icon) => (
	<YenIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
