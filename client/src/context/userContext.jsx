import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import { createContext,useContext } from "react"

const userContext = createContext();

const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);
    useEffect(() => {
            try {
            const token = localStorage.getItem("token");
            if (token && token.split(".").length === 3) {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } 
        }catch (e) {
            console.error("JWT Decode Error:", e.message);
            }
        }, []);

    if(user) return(
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider;
export const useUser = ()=> useContext(userContext);