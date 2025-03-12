import {createAction} from '@reduxjs/toolkit';

export const logout = createAction('mutator/logout');
export const handleUnauthorized = createAction('mutator/handleUnauthorized');

// export const clearSimpedesFlowState = createAction(
// 	'mutator/clearSimpedesFlowState',
// );
// export const clearTabunganEmasFlowState = createAction(
// 	'mutator/clearTabunganEmasFlowState',
// );
// export const handleReopen = createAction('mutator/handleReopen');
// export const clearMekaarFlowState = createAction(
// 	'mutator/clearMekaarFlowState',
// );
// export const clearPinjamanBRIFlowState = createAction(
// 	'mutator/clearPinjamanBRIFlowState',
// );
// export const clearPinjamanGadaiDirectFlowState = createAction(
// 	'mutator/clearPinjamanGadaiDirectFlowState',
// );
