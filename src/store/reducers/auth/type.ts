export type AuthStateType = {
	phoneNumber: string | undefined;
	otpResultId: string | undefined;
	resetPinOtpResultId: string | undefined;
	lastOtpType: 'WHATSAPP' | 'SMS' | undefined;
	isExistSimpedesUmiAccount: boolean;
};
