import React from 'react';

import AccountCircleIcon from './account-circle.svg';

import type {Icon} from '../type';
export const AccountCircle = (props: Icon) => (
	<AccountCircleIcon
		width={props.size || props.width}
		height={props.size || props.height}
		style={props.style}
	/>
);
