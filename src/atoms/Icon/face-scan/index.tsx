import React from 'react';

import FaceScanIcon from './face-scan.svg';

import type {Icon} from '../type';
export const FaceScan = (props: Icon) => (
	<FaceScanIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
