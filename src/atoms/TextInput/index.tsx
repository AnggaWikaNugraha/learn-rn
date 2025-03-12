import React, {
	useContext,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import {
	Animated,
	Easing,
	Pressable,
	StyleProp,
	StyleSheet,
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	View,
	ViewStyle,
} from 'react-native';

import {ThemeContext} from '../../config/theme';

import {Icon} from '../Icon/index';

type TextInputProps = Omit<RNTextInputProps, 'style'> & {
	disabled?: boolean;
	status?: 'success' | 'warning' | 'error';
	label: string;
	icon?: keyof typeof Icon;
	containerStyle?: StyleProp<ViewStyle>;
};

export type TextInputIconProps = {
	icon?: keyof typeof Icon;
};

declare type TextInput = RNTextInput;

const TextInput = React.forwardRef<Partial<RNTextInput>, TextInputProps>(
	(props, ref) => {
		const {
			disabled,
			status,
			label,
			value,
			icon,
			containerStyle,
			onFocus,
			onBlur,
			testID,
			...attrs
		} = props;

		const inputRef = useRef<RNTextInput>(null);

		const [isFocus, setIsFocus] = useState<boolean>(false);

		const labelAnim = useRef(new Animated.Value(0)).current;

		const themeContext = useContext(ThemeContext);

		// const TextInputIcon = (iconProps: TextInputIconProps) => {
		// 	if (!iconProps.icon) {
		// 		return null;
		// 	}
		// 	const CurrentIcon = Icon[iconProps.icon];
		// 	return (
		// 		<View testID={`${testID}__icon-container`}>
		// 			<CurrentIcon size={20} color="#5C5F62" />
		// 		</View>
		// 	);
		// };

		useEffect(() => {
			if (isFocus || value) {
				Animated.timing(labelAnim, {
					toValue: 1,
					duration: 150,
					useNativeDriver: false,
					easing: Easing.out(Easing.circle),
				}).start();
			} else {
				Animated.timing(labelAnim, {
					toValue: 0,
					duration: 150,
					useNativeDriver: false,
					easing: Easing.out(Easing.circle),
				}).start();
			}
		}, [value, isFocus, labelAnim]);

		useImperativeHandle(ref, () => {
			return {...(inputRef.current as unknown as RNTextInput)};
		});

		return (
			<Pressable
				testID={`${testID}__pressable`}
				style={[
					styles.container,
					disabled && styles.disabledContainer,
					isFocus && styles.focusContainer,
					status === 'success' && styles.successContainer,
					status === 'warning' && styles.warningContainer,
					status === 'error' && styles.errorContainer,
					containerStyle,
				]}
				onPress={() => {
					if (!disabled) {
						inputRef.current?.focus();
					}
				}}>
				<View testID={`${testID}__view`} style={styles.innerWrapper}>
					<Animated.Text
						testID={`${testID}__animated-label`}
						style={[
							styles.label,
							{
								fontFamily:
									themeContext?.fonts?.medium?.fontFamily,
								fontWeight:
									themeContext?.fonts?.medium?.fontWeight,
								fontSize: labelAnim.interpolate({
									inputRange: [0, 1],
									outputRange: [16, 14],
								}),
								top: labelAnim.interpolate({
									inputRange: [0, 1],
									outputRange: [16, 0],
								}),
							},
						]}>
						{label}
					</Animated.Text>
					<RNTextInput
						testID={`${testID}__rn-textinput`}
						style={[styles.input, disabled && styles.disabledInput]}
						value={value}
						onFocus={e => {
							onFocus && onFocus(e);
							setIsFocus(true);
						}}
						onBlur={e => {
							onBlur && onBlur(e);
							setIsFocus(false);
						}}
						editable={!disabled}
						{...attrs}
						ref={inputRef}
					/>
				</View>

				{/* <TextInputIcon icon={icon} /> */}
			</Pressable>
		);
	},
);

const styles = StyleSheet.create({
	container: {
		height: 64,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#B8BEC4',
		position: 'relative',
	},
	disabledContainer: {
		backgroundColor: '#DDE2E8',
	},
	focusContainer: {
		borderColor: '#3375B0',
	},
	successContainer: {
		borderColor: '#1CC11C',
	},
	warningContainer: {
		borderColor: '#F2B50F',
	},
	errorContainer: {
		borderColor: '#EC1E1E',
	},
	input: {
		fontSize: 16,
		color: '#242424',
		position: 'absolute',
		bottom: 0,
		left: 14,
		right: 16,
		lineHeight: 22,
	},
	disabledInput: {
		color: '#73777B',
	},
	label: {
		fontSize: 16,
		color: '#8A8F93',
		position: 'absolute',
		top: 16,
		left: 16,
		right: 16,
	},
	innerWrapper: {
		flex: 1,
	},
});

export default TextInput;
