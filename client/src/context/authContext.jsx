import{createContext,useContext} from "react";
import API from "@/services/api";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
const authContext = createContext();

const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const login = async(credentials)=>{
        try{
            const res = await API.post('/auth/login',credentials);
            const data = res.data;
            localStorage.setItem("token",data.token);
            navigate('/dashboard');
            const token = localStorage.getItem("token");
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }
    return(
        <authContext.Provider value={{login,user,loading,error}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = ()=>useContext(authContext)
export default AuthProvider;