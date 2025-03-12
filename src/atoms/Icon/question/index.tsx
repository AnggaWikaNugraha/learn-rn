import React from 'react';

import QuestionIcon from './question.svg';

import type {Icon} from '../type';
export const Question = (props: Icon) => (
	<QuestionIcon
		width={props.size || props.width}
		height={props.size || props.height}
		color={props.color}
		style={props.style}
	/>
);
