import { createContext,useContext } from "react"
import API from "@/services/api";
import { useUser } from "./userContext";
const postContext = createContext();

const PostProvider = ({children})=>{
    const {user} = useUser();
    console.log(user.id)
    const getAllPost = async()=>{
        try{
            const res = await API.get('/posts/');
            return res.data;
        }catch(e){
            console.log(e.message);
        }
    }
    const fetchMyPost = async ()=>{
        try{
            const res = await API.get(`/posts/${user.id}`);
            return res.data;
        }catch(e){
            return e.message;
        }
    }
    return(
        <postContext.Provider value={{getAllPost,fetchMyPost}}>
            {children}
        </postContext.Provider>
    )

}

export default PostProvider;
export const usePost = () => useContext(postContext);