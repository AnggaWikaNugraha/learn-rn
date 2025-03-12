import React from 'react';
import {Path, Svg} from 'react-native-svg';

import type {Icon} from '../type';
export const CheckCircleFilled = (props: Icon) => (
	<Svg
		width={props.size || props.width}
		height={props.size || props.height}
		style={props.style}
		viewBox="0 0 16 16"
		fill="none">
		<Path
			d="M8 1.25C4.278 1.25 1.25 4.278 1.25 8C1.25 11.722 4.278 14.75 8 14.75C11.722 14.75 14.75 11.722 14.75 8C14.75 4.278 11.722 1.25 8 1.25Z"
			fill={props.color}
		/>
		<Path
			d="M10.8033 5.47L7.33334 8.93933L5.86334 7.47L4.80334 8.53L7.33334 11.0607L11.8633 6.53L10.8033 5.47Z"
			fill={props.accentColor || '#FFFFFF'}
		/>
	</Svg>
);
