export interface APIResponse<T = unknown, U = string> {
	data: T;
	responseCode: string;
	responseDescription: U;
}
