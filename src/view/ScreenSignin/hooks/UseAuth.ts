import { useContext } from "react";
import { AuthContext } from "../state/context";

// 4. Custom Hook agar mudah menggunakan AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};