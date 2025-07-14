import API from "@/services/api";
import { useState } from "react";
import { useEffect } from "react";

const useMyPosts = ()=>{
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        let isMounted = true;
        async function fetchPost(){
            try{
                const res = await API.get('/posts/mypost');
                setPosts(res.data)
            }catch(err){
                setError(err)
            }finally{
                if(isMounted){
                    setLoading(false)
                }
            }
            
        }
        fetchPost()
        return ()=>isMounted = false;
    },[])
    return {posts,error,loading};

}
export default useMyPosts;