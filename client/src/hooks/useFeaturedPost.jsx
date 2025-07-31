import { useState } from "react";
import { useEffect } from "react";
import { usePost } from "@/context/postContext";
export const useFeaturedPost = ()=>{
    const {getAllPost} = usePost();
    const [isLoading,setIsLoading] = useState(true);
    const [featuredPost,setFeaturedPost] = useState();
    useEffect(()=>{
        async function fetchAllPosts(){
            try{
                const res = await getAllPost();
                setFeaturedPost(res[0]);
            }catch(e){
                console.log(e.message)
            }finally{
                setIsLoading(false)
            }
            
        }
        fetchAllPosts()
    },[]) 
    return  {featuredPost,isLoading};
}