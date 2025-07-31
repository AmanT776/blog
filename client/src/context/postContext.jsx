import { createContext,useContext } from "react"
import API from "@/services/api";
import { useState } from "react";
const postContext = createContext();

const PostProvider = ({children})=>{
    const getAllPost = async()=>{
        try{
            const res = await API.get('/posts/');
            return res.data;
        }catch(e){
            console.log(e.message);
        }
    }

    return(
        <postContext.Provider value={{getAllPost}}>
            {children}
        </postContext.Provider>
    )

}

export default PostProvider;
export const usePost = () => useContext(postContext);