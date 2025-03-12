import React from 'react';

import ReceiptPaperBillFilledIcon from './receipt-paper-bill-filled.svg';

import type {Icon} from '../type';
export const ReceiptPaperBillFilled = (props: Icon) => (
	<ReceiptPaperBillFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
