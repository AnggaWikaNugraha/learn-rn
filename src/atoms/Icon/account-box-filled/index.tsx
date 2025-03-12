import React from 'react';

import AccountBoxFilledIcon from './account-box-filled.svg';

import type {Icon} from '../type';
export const AccountBoxFilled = (props: Icon) => (
	<AccountBoxFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
