import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		display: 'flex',
		gap: 15
	},
	fixexScrollView: {
		flex: 1,
	},
	TextLogin: {
		width: 100,
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 20
	},
	wrapper: {
		flex: 1,
		paddingHorizontal: 16,
		display: 'flex',
		justifyContent: 'center',
		gap: 15
	},
	ktpImage: {
		width: 204,
		height: 204,
		alignSelf: 'center',
		marginTop: 32,
	},
	title: {
		color: '#00529C',
		fontSize: 20,
		fontWeight: '600',
		marginTop: 32,
	},
	subtitle: {
		fontSize: 14,
		color: '#2E3031',
		fontWeight: '500',
		marginTop: 16,
	},
	textInput: {
		marginTop: 16,
	},
	referral: {
		marginTop: 16,
	},
	btn: {
		marginTop: 32,
		marginBottom: 16,
		marginHorizontal: 16,
	},
});
