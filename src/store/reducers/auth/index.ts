import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthStateType} from './type';

export const authInitialState: AuthStateType = {
	phoneNumber: undefined,
	otpResultId: undefined,
	resetPinOtpResultId: undefined,
	lastOtpType: undefined,
	isExistSimpedesUmiAccount: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		setPhoneNumber: (state, action: PayloadAction<string>) => {
			state.phoneNumber = action.payload;
		},
		setOtpResultId: (state, action: PayloadAction<string>) => {
			state.otpResultId = action.payload;
		},
		setResetPinOtpResultId: (
			state,
			action: PayloadAction<string | undefined>,
		) => {
			state.resetPinOtpResultId = action.payload;
		},
		setLastOtpType: (
			state,
			action: PayloadAction<'WHATSAPP' | 'SMS' | undefined>,
		) => {
			state.lastOtpType = action.payload;
		},
		setIsExistSimpedesUmiAccount: (
			state,
			action: PayloadAction<boolean>,
		) => {
			state.isExistSimpedesUmiAccount = action.payload;
		},
		resetAuthState: state => {
			state.phoneNumber = authInitialState.phoneNumber;
			state.otpResultId = authInitialState.otpResultId;
			state.resetPinOtpResultId = authInitialState.resetPinOtpResultId;
			state.lastOtpType = authInitialState.lastOtpType;
			state.isExistSimpedesUmiAccount =
				authInitialState.isExistSimpedesUmiAccount;
		},
	},
});

export const {
	setPhoneNumber,
	setOtpResultId,
	setResetPinOtpResultId,
	setLastOtpType,
	resetAuthState,
	setIsExistSimpedesUmiAccount,
} = authSlice.actions;

export default authSlice.reducer;
