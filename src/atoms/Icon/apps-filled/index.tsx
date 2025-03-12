import React from 'react';

import AppsFilledIcon from './apps-filled.svg';

import type {Icon} from '../type';
export const AppsFilled = (props: Icon) => (
	<AppsFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
