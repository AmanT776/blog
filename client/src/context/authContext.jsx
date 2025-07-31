import{createContext,useContext} from "react";
import API from "@/services/api";
import {useNavigate} from "react-router-dom";
const authContext = createContext();

const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const login = async(credentials)=>{
        try{
            const res = await API.post('/auth/login',credentials);
            const data = res.data;
            localStorage.setItem("token",data.token);
            navigate('/dashboard');
            
        }catch(e){
            console.log(e.message)
        }
    }
    
    return(
        <authContext.Provider value={{login}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = ()=>useContext(authContext)
export default AuthProvider;