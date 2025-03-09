export interface AuthState {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
}

export type AuthAction =
    | { type: "RESTORE_TOKEN"; token: string | null }
    | { type: "SIGN_IN"; token: string }
    | { type: "SIGN_OUT" };

export const initialState: AuthState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "RESTORE_TOKEN":
            return { ...state, userToken: action.token, isLoading: false };
        case "SIGN_IN":
            return { ...state, isSignout: false, userToken: action.token };
        case "SIGN_OUT":
            return { ...state, isSignout: true, userToken: null };
        default:
            return state;
    }
};
