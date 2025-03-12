import React from 'react';

import QrCodeScanIcon from './qr-code-scan.svg';

import type {Icon} from '../type';
export const QrCodeScan = (props: Icon) => (
	<QrCodeScanIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
