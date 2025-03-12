import {persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
};

const configPersistReducer = {
	key: 'config',
	storage: AsyncStorage,
};

export const appReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
});