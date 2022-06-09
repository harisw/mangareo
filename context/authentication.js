import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    return (
        <Context.Provider value={[authToken, setAuthToken]}>{children}</Context.Provider>
    );
}

export function useAuthContext() {
    return useContext(Context);
}