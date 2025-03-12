import React from 'react';

import KeyDisabledIcon from './key-disabled.svg';

import type {Icon} from '../type';
export const KeyDisabled = (props: Icon) => (
	<KeyDisabledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
