import {
	EnhancedStore,
	StoreEnhancer,
	ThunkDispatch,
	Tuple,
	UnknownAction,
} from '@reduxjs/toolkit';

export type StoreType = EnhancedStore<
	unknown,
	UnknownAction,
	Tuple<
		[
			StoreEnhancer<{
				dispatch: ThunkDispatch<unknown, undefined, UnknownAction>;
			}>,
			StoreEnhancer,
		]
	>
>;
