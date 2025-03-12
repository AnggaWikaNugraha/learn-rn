import React from 'react';

import InformationFilledIcon from './information-filled.svg';

import type {Icon} from '../type';
export const InformationFilled = (props: Icon) => (
	<InformationFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
