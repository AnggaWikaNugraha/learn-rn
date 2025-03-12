import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import {Icon} from '../../atoms/Icon';
import Text from '../../atoms/Text';

type Props = {
	variant: 'error' | 'valid';
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	children?: React.ReactNode;
	testID?: string;
};

const FormMessage = (props: Props) => {
	const {variant, style, textStyle, children, ...attrs} = props;

	return (
		<View style={[styles.container, style]} {...attrs}>
			{variant === 'error' ? (
				<Icon.WarningTriangleFilled color="#EC1E1E" size={16} />
			) : (
				<Icon.CheckCircleFilled
					color="#1CC11C"
					size={16}
					accentColor="#FFFFFF"
				/>
			)}
			<Text
				style={[
					styles.message,
					variant === 'error' && styles.errorMessage,
					variant === 'valid' && styles.validMessage,
					textStyle,
				]}>
				{children}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	message: {
		flex: 1,
		color: '#EC1E1E',
		fontSize: 12,
		fontWeight: '500',
		marginLeft: 8,
	},
	validMessage: {
		color: '#1CC11C',
	},
	errorMessage: {
		color: '#EC1E1E',
	},
});

export default FormMessage;
