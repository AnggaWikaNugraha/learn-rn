import React from 'react';

import ReceiptPaperBillIcon from './receipt-paper-bill.svg';

import type {Icon} from '../type';
export const ReceiptPaperBill = (props: Icon) => (
	<ReceiptPaperBillIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
