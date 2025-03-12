import React from 'react';

type Font = {
	fontFamily?: string;
	fontWeight?:
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900';
};

type Fonts = {
	bold: Font;
	boldItalic: Font;
	demiBold: Font;
	demiBoldItalic: Font;
	medium: Font;
	mediumItalic: Font;
	regular: Font;
	regularItalic: Font;
	light: Font;
	lightItalic: Font;
};

export type Theme = {
	fonts: Fonts;
};

type ProviderProps = {
	children?: React.ReactNode;
	theme?: Theme;
};

export const DefaultTheme: Theme = {
	fonts: {
		bold: {
			fontWeight: '700',
		},
		boldItalic: {
			fontWeight: '700',
		},
		demiBold: {
			fontWeight: '600',
		},
		demiBoldItalic: {
			fontWeight: '600',
		},
		medium: {
			fontWeight: '500',
		},
		mediumItalic: {
			fontWeight: '500',
		},
		regular: {
			fontWeight: '400',
		},
		regularItalic: {
			fontWeight: '400',
		},
		light: {
			fontWeight: '300',
		},
		lightItalic: {
			fontWeight: '300',
		},
	},
};

export const ThemeContext = React.createContext(DefaultTheme);

const SenyumUIProvider = (props: ProviderProps) => {
	const {children, theme} = props;
	return (
		<ThemeContext.Provider value={theme || DefaultTheme}>
			{children}
		</ThemeContext.Provider>
	);
};

export default SenyumUIProvider;
