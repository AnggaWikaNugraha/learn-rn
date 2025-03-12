import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {persistStore} from 'redux-persist';

import {injectStoreIntoPartnerAuthInstance} from '../config/axios/partnerAuthInstance';
import {configureStore, Reducer, UnknownAction} from '@reduxjs/toolkit';
import {appReducer} from './reducers';
import { logout } from './reducers/mutator';
import {injectStore} from '../config/axios/axiosUtils';

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (
	state: RootState,
	action: UnknownAction,
) => {
    if (action.type === logout.toString()) {
        return appReducer(
			{
				...state,
				
			},
			action,
		);
    }
    return appReducer(state, action);
};

export const store = configureStore({
	reducer: rootReducer,
    devTools: true, // ✅ Pastikan ini diaktifkan
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

injectStore(store);
injectStoreIntoPartnerAuthInstance(store);

export function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
}

export const persistor = persistStore(store);


export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
