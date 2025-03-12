import React, {useContext, useMemo} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

import {ThemeContext} from '../../config/theme';

declare type Text = TextProps;

const Text = React.forwardRef<RNText, TextProps>((props: TextProps, ref) => {
	const {style, ...attrs} = props;

	const themeContext = useContext(ThemeContext);

	const fontFamily = useMemo(() => {
		const incomingStyle = StyleSheet.flatten(style);

		if (
			incomingStyle &&
			(Object.keys(incomingStyle).includes('fontWeight') ||
				Object.keys(incomingStyle).includes('fontStyle'))
		) {
			if (incomingStyle.fontStyle === 'italic') {
				switch (incomingStyle.fontWeight) {
					case '400':
						return themeContext.fonts.regularItalic.fontFamily;
					case '500':
						return themeContext.fonts.mediumItalic.fontFamily;
					case '600':
						return themeContext.fonts.demiBoldItalic.fontFamily;
					case '700':
						return themeContext.fonts.boldItalic.fontFamily;
					default:
						return themeContext.fonts.mediumItalic.fontFamily;
				}
			}

			switch (incomingStyle.fontWeight) {
				case '400':
					return themeContext.fonts.regular.fontFamily;
				case '500':
					return themeContext.fonts.medium.fontFamily;
				case '600':
					return themeContext.fonts.demiBold.fontFamily;
				case '700':
					return themeContext.fonts.bold.fontFamily;
				default:
					return themeContext.fonts.medium.fontFamily;
			}
		}
		return themeContext.fonts.medium.fontFamily;
	}, [
		style,
		themeContext.fonts.bold,
		themeContext.fonts.boldItalic,
		themeContext.fonts.demiBold,
		themeContext.fonts.demiBoldItalic,
		themeContext.fonts.medium,
		themeContext.fonts.mediumItalic,
		themeContext.fonts.regular,
		themeContext.fonts.regularItalic,
	]);

	const fontStyle = useMemo(() => {
		const styleObj = StyleSheet.flatten(style);

		if (styleObj?.fontStyle === 'italic') {
			return 'normal';
		}
	}, [style]);

	return (
		<RNText
			style={[style, {fontWeight: undefined}, {fontFamily, fontStyle}]}
			{...attrs}
			ref={ref}
		/>
	);
});

export default Text;
