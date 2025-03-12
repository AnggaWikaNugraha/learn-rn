import React from 'react';

import KeyDisabledFilledIcon from './key-disabled-filled.svg';

import type {Icon} from '../type';
export const KeyDisabledFilled = (props: Icon) => (
	<KeyDisabledFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
