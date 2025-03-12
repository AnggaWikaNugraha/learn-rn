import React from 'react';

import PackageIcon from './package.svg';

import type {Icon} from '../type';
export const Package = (props: Icon) => (
	<PackageIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
