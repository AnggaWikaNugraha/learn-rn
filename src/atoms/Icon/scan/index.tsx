import React from 'react';

import ScanIcon from './scan.svg';

import type {Icon} from '../type';
export const Scan = (props: Icon) => (
	<ScanIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
