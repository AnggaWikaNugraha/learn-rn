import React, {useCallback, useMemo, useState} from 'react';
import {
	Pressable,
	StyleProp,
	StyleSheet,
	TextStyle,
	ViewStyle,
} from 'react-native';

import {Icon} from '../Icon/index';
import Text from '../Text';
import {ThemeContext} from '../../config/theme';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonVariant = 'primary' | 'secondary';

type ButtonIconPosition = 'left' | 'right';

export type ButtonProps = {
	size?: ButtonSize;
	children: React.ReactNode;
	disabled?: boolean;
	bordered?: boolean;
	buttonColor?: string;
	activeButtonColor?: string;
	textColor?: string;
	activeTextColor?: string;
	variant?: ButtonVariant;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	accessibilityLabel?: string;
	accessibilityHint?: string;
	showShadow?: boolean;
	testID?: string;
	icon?: keyof typeof Icon;
	iconPosition?: ButtonIconPosition;
	onPress?: () => void;
	onPressDisabled?: () => void;
	onPressIn?: () => void;
	onPressOut?: () => void;
};

/**
 * Button Component
 * @param {ButtonProps} props
 * @returns JSX.Element
 */
const Button = (props: ButtonProps) => {
	const [isPressIn, setIsPressIn] = useState<boolean>(false);

	const {
		size = 'md',
		children,
		disabled,
		bordered,
		buttonColor,
		activeButtonColor,
		textColor,
		activeTextColor,
		variant,
		style,
		textStyle,
		accessibilityLabel,
		accessibilityHint,
		showShadow = false,
		testID,
		icon,
		iconPosition,
		onPress,
		onPressDisabled,
		onPressIn,
		onPressOut,
	} = props;

	const buttonSize = useMemo(() => {
		if (size === 'sm') {
			return styles.smallButton;
		} else if (size === 'lg') {
			return styles.largeButton;
		}
		return styles.mediumButton;
	}, [size]);

	const buttonTextSize = useMemo(() => {
		if (size === 'sm') {
			return styles.smallButtonText;
		} else if (size === 'lg') {
			return styles.largeButtonText;
		}
		return styles.mediumButtonText;
	}, [size]);

	const button: ViewStyle = useMemo(() => {
		if (!isPressIn && buttonColor) {
			return {backgroundColor: buttonColor};
		} else if (isPressIn && activeButtonColor) {
			return {backgroundColor: activeButtonColor};
		} else if (variant) {
			if (variant === 'primary') {
				if (bordered) {
					if (disabled) {
						return styles.borderedButtonDisabled;
					} else if (isPressIn) {
						return styles.borderedButtonPrimaryActive;
					} else {
						return styles.borderedButtonPrimary;
					}
				} else {
					if (disabled) {
						return styles.buttonPrimaryDisabled;
					} else if (isPressIn) {
						return styles.buttonPrimaryActive;
					} else {
						return styles.buttonPrimary;
					}
				}
			}
		} else {
			if (bordered) {
				if (disabled) {
					return styles.borderedButtonDisabled;
				} else if (isPressIn) {
					return styles.borderedButtonActive;
				} else {
					return styles.borderedButton;
				}
			} else {
				if (disabled) {
					return styles.buttonDisabled;
				} else if (isPressIn) {
					return styles.buttonActive;
				} else {
					return styles.button;
				}
			}
		}
		return {};
	}, [
		activeButtonColor,
		bordered,
		buttonColor,
		disabled,
		variant,
		isPressIn,
	]);

	const buttonTextColor: TextStyle = useMemo(() => {
		if (disabled && bordered) {
			return styles.borderedButtonTextDisabled;
		}

		if (!isPressIn && textColor) {
			if (disabled) {
				return styles.borderedButtonTextDisabled;
			} else {
				return {color: textColor};
			}
		} else if (isPressIn && activeTextColor) {
			if (disabled) {
				return styles.borderedButtonTextDisabled;
			} else {
				return {color: activeTextColor};
			}
		} else if (variant) {
			if (variant === 'primary') {
				if (bordered) {
					if (isPressIn) {
						return styles.borderedButtonTextPrimaryActive;
					} else {
						return styles.borderedButtonTextPrimary;
					}
				} else {
					if (disabled) {
						return styles.buttonPrimaryTextDisabled;
					} else {
						return styles.buttonPrimaryText;
					}
				}
			}
		} else {
			if (bordered) {
				if (isPressIn) {
					return styles.borderedButtonTextActive;
				} else {
					return styles.borderedButtonText;
				}
			} else {
				if (disabled) {
					return styles.buttonTextDisabled;
				} else if (isPressIn) {
					return styles.buttonTextActive;
				}
			}
		}
		return {};
	}, [activeTextColor, bordered, disabled, textColor, variant, isPressIn]);

	const handlePress = useCallback(() => {
		if (!onPress || disabled) {
			if (onPressDisabled) {
				onPressDisabled();
			}
			return;
		}

		onPress();
	}, [disabled, onPress, onPressDisabled]);

	const handlePressIn = useCallback(() => {
		setIsPressIn(true);

		if (!onPressIn || disabled) {
			return;
		}

		onPressIn();
	}, [disabled, onPressIn]);

	const handlePressOut = useCallback(() => {
		setIsPressIn(false);

		if (!onPressOut || disabled) {
			return;
		}

		onPressOut();
	}, [disabled, onPressOut]);

	return (
		<ThemeContext.Consumer>
			{ctx => (
				<Pressable
					onPress={handlePress}
					onPressIn={handlePressIn}
					onPressOut={handlePressOut}
					style={[
						styles.button,
						button,
						buttonSize,
						showShadow && styles.shadow,
						style,
					]}
					accessibilityLabel={accessibilityLabel}
					accessibilityHint={accessibilityHint}
					testID={testID}>
					{(!iconPosition || iconPosition === 'left') && (
						<ButtonIcon
							icon={icon}
							size={size}
							isPressIn={isPressIn}
							textColor={textColor}
							activeTextColor={activeTextColor}
							variant={variant}
							bordered={bordered}
							disabled={disabled}
							iconPosition={iconPosition}
						/>
					)}
					<Text
						testID={`${testID}__text`}
						style={[
							styles.buttonText,
							buttonTextSize,
							buttonTextColor,
							{
								fontFamily: ctx.fonts.bold.fontFamily,
								fontWeight: ctx.fonts.bold.fontWeight,
							},
							textStyle,
						]}>
						{children}
					</Text>
					{iconPosition === 'right' && (
						<ButtonIcon
							icon={icon}
							size={size}
							isPressIn={isPressIn}
							textColor={textColor}
							activeTextColor={activeTextColor}
							variant={variant}
							bordered={bordered}
							disabled={disabled}
							iconPosition={iconPosition}
						/>
					)}
				</Pressable>
			)}
		</ThemeContext.Consumer>
	);
};

export type ButtonIconProps = {
	icon?: keyof typeof Icon;
	size?: ButtonSize;
	isPressIn: boolean;
	textColor?: string;
	activeTextColor?: string;
	variant?: ButtonVariant;
	bordered?: boolean;
	disabled?: boolean;
	iconPosition?: ButtonIconPosition;
};
const ButtonIcon = ({
	icon,
	size,
	isPressIn,
	textColor,
	activeTextColor,
	variant,
	bordered,
	disabled,
	iconPosition,
}: ButtonIconProps) => {
	if (icon) {
		const CurrentIcon = Icon[icon];
		let iconSize = '0';
		let iconColor = '#FFFFFF';
		let iconAccentColor = '#FF6100';

		if (size === 'sm') {
			iconSize = '16';
		} else if (size === 'lg') {
			iconSize = '20';
		} else {
			iconSize = '18';
		}

		if (!isPressIn && textColor) {
			iconColor = textColor;
		} else if (isPressIn && activeTextColor) {
			iconColor = activeTextColor;
		} else if (variant) {
			if (variant === 'primary') {
				if (bordered) {
					if (disabled) {
						iconColor = '#B8BEC4';
					} else if (isPressIn) {
						iconColor = '#E65700';
						iconAccentColor = '#FFFFFF';
					} else {
						iconColor = '#FF6100';
						iconAccentColor = '#FFFFFF';
					}
				} else {
					if (disabled) {
						iconColor = '#E7EBEE';
						iconAccentColor = '#E65700';
					} else {
						iconColor = '#FFFFFF';
						iconAccentColor = '#FF6100';
					}
				}
			}
		} else {
			if (bordered) {
				if (disabled) {
					iconColor = '#B8BEC4';
				} else if (isPressIn) {
					iconColor = '#B8BEC4';
				} else {
					iconColor = '#8A8F93';
				}
			} else {
				if (disabled) {
					iconColor = '#CFD6DD';
				} else {
					iconColor = '#242424';
				}
			}
		}

		return (
			<CurrentIcon
				size={iconSize}
				color={iconColor}
				accentColor={iconAccentColor}
				style={{
					...(iconPosition === 'right' &&
						styles.buttonRightIconStyle),
					...((!iconPosition || iconPosition === 'left') &&
						styles.buttonLeftIconStyle),
				}}
			/>
		);
	}
	return null;
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
		borderColor: '#FAFBFC',
		borderWidth: 1,
		borderStyle: 'solid',
		paddingHorizontal: 8,
	},
	buttonActive: {
		backgroundColor: '#FAFBFC',
	},
	buttonDisabled: {
		backgroundColor: '#F5F7F8',
		borderColor: '#F5F7F8',
	},
	borderedButton: {
		backgroundColor: '#FFFFFF',
		borderColor: '#8A8F93',
	},
	borderedButtonActive: {
		backgroundColor: '#FFFFFF',
		borderColor: '#B8BEC4',
	},
	borderedButtonDisabled: {
		backgroundColor: '#FFFFFF',
		borderColor: '#B8BEC4',
	},
	borderedButtonPrimary: {
		backgroundColor: '#FFFFFF',
		borderColor: '#FF6100',
	},
	borderedButtonPrimaryActive: {
		backgroundColor: '#FFFFFF',
		borderColor: '#E65700',
	},
	buttonPrimary: {
		backgroundColor: '#FF6100',
		borderColor: '#FF6100',
	},
	buttonPrimaryActive: {
		backgroundColor: '#E65700',
		borderColor: '#E65700',
	},
	buttonPrimaryDisabled: {
		backgroundColor: '#B8BEC4',
		borderColor: '#B8BEC4',
	},
	buttonText: {
		color: '#242424',
		fontSize: 14,
		fontWeight: '700',
	},
	buttonTextActive: {
		color: '#242424',
	},
	buttonTextDisabled: {
		color: '#CFD6DD',
	},
	borderedButtonText: {
		color: '#8A8F93',
	},
	borderedButtonTextActive: {
		color: '#B8BEC4',
	},
	borderedButtonTextDisabled: {
		color: '#B8BEC4',
	},
	buttonPrimaryText: {
		color: '#FFFFFF',
	},
	buttonPrimaryTextDisabled: {
		color: '#E7EBEE',
	},
	borderedButtonTextPrimary: {
		color: '#FF6100',
	},
	borderedButtonTextPrimaryActive: {
		color: '#E65700',
	},
	smallButton: {
		height: 32,
	},
	smallButtonText: {
		fontSize: 12,
		lineHeight: 18,
	},
	mediumButton: {
		height: 40,
	},
	mediumButtonText: {
		fontSize: 14,
		lineHeight: 21,
	},
	largeButton: {
		height: 56,
	},
	largeButtonText: {
		fontSize: 16,
		lineHeight: 24,
	},
	buttonLeftIconStyle: {
		marginRight: 6,
	},
	buttonRightIconStyle: {
		marginLeft: 6,
	},
	shadow: {
		shadowColor: '#707070',
		shadowOpacity: 0.2,
		shadowRadius: 10,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		elevation: 5,
	},
});

export default Button;
