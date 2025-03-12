import React from 'react';

import TabletMobileIcon from './tablet-mobile.svg';

import type {Icon} from '../type';
export const TabletMobile = (props: Icon) => (
	<TabletMobileIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
