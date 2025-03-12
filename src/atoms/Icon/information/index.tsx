import React from 'react';

import InformationIcon from './information.svg';

import type {Icon} from '../type';
export const Information = (props: Icon) => (
	<InformationIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
