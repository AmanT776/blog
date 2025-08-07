import { useState } from "react";
import { useEffect } from "react";
import { usePost } from "@/context/postContext";
export const useFeaturedPost = ()=>{
    const {getAllPost} = usePost();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const [featuredPost,setFeaturedPost] = useState();
    useEffect(()=>{
        async function fetchAllPosts(){
            try{
                const res = await getAllPost();
                setFeaturedPost(res[0])
            }catch(e){
                setError(e)
            }finally{
                setLoading(false)
            }
            
        }
        fetchAllPosts()
    },[]) 
    return  {featuredPost,loading,error};
}