import React from 'react';

import AccountCircleFilledIcon from './account-circle-filled.svg';

import type {Icon} from '../type';
export const AccountCircleFilled = (props: Icon) => (
	<AccountCircleFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
