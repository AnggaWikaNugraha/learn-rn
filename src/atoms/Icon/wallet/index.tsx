import React from 'react';

import WalletIcon from './wallet.svg';

import type {Icon} from '../type';
export const Wallet = (props: Icon) => (
	<WalletIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
