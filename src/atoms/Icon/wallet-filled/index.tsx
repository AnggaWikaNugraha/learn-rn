import React from 'react';

import WalletFilledIcon from './wallet-filled.svg';

import type {Icon} from '../type';
export const WalletFilled = (props: Icon) => (
	<WalletFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
