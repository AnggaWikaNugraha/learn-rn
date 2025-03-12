import React from 'react';

import AccountBoxIcon from './account-box.svg';

import type {Icon} from '../type';
export const AccountBox = (props: Icon) => (
	<AccountBoxIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
