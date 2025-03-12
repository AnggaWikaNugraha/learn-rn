import React from 'react';

import QuestionFilledIcon from './question-filled.svg';

import type {Icon} from '../type';
export const QuestionFilled = (props: Icon) => (
	<QuestionFilledIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
