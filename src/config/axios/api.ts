import DeviceInfo from 'react-native-device-info';

type BundleId =
	| 'com.senyum.uat'
	| 'com.senyum.staging'
	| 'com.senyum.outer'
	| 'com.senyum';

const bundleId = DeviceInfo?.getBundleId() as BundleId;

export const apiVersion = {
    login: {
		v1: (() => {
			switch (bundleId) {
				case 'com.senyum.uat':
				case 'com.senyum.staging':
					return '/v1/auth/login';
				case 'com.senyum.outer':
				case 'com.senyum':
					return '/v1.0/senyummobile/onboarding/auth/login';
				default:
					return '';
			}
		})(),
	},
}