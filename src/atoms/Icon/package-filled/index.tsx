import React from 'react';

import PackageFilledIcon from './package-filled.svg';

import type {Icon} from '../type';
export const PackageFilled = (props: Icon) => (
	<PackageFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
