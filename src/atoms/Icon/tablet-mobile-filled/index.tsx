import React from 'react';

import TabletMobileFilledIcon from './tablet-mobile-filled.svg';

import type {Icon} from '../type';
export const TabletMobileFilled = (props: Icon) => (
	<TabletMobileFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
