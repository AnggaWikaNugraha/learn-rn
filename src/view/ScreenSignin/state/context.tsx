import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { authReducer, initialState, AuthState, AuthAction } from "./reducer";

interface AuthContextProps {
    state: AuthState;
    signIn: () => Promise<void>;
    signOut: () => void;
    signUp: () => Promise<void>;
}

// Inisialisasi Context
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provider untuk membungkus aplikasi
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // useEffect(() => {
    //     const bootstrapAsync = async () => {
    //         let userToken: string | null = null;
    //         try {
    //             userToken = 'token'
    //         } catch (e) {
    //             console.error("Failed to load token", e);
    //         }
    //         dispatch({ type: "RESTORE_TOKEN", token: userToken });
    //     };
    //     bootstrapAsync();
    // }, []);

    const authContext = useMemo(
        () => ({
            signIn: async () => {
                dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
            },
            signOut: () => dispatch({ type: "SIGN_OUT" }),
            signUp: async () => {
                dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
            },
        }),
        []
    );

    return <AuthContext.Provider value={{ state, ...authContext }}>{children}</AuthContext.Provider>;
};
