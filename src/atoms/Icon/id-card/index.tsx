import React from 'react';

import IdCardIcon from './id-card.svg';

import type {Icon} from '../type';
export const IdCard = (props: Icon) => (
	<IdCardIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
