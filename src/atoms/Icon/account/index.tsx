import React from 'react';

import AccountIcon from './account.svg';

import type {Icon} from '../type';
export const Account = (props: Icon) => (
	<AccountIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
