import { usePost } from "@/context/postContext";
import { useState } from "react";
import { useEffect } from "react";
import PostCard from "@/components/PostCard";

const Mypost = ()=>{
    const {fetchMyPost} = usePost();
    const [posts,setPosts] = useState();
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function fetchPost(){
            try{
                const post = await fetchMyPost();
                setPosts(post)
            }catch(e){
                setError(e.message);
            }finally{
                setLoading(false);
            }
        }
        fetchPost()
    } ,[]) ;
    
    if(loading) return <h1>Loading ...</h1>;
    if(posts) return(
        <div className="flex flex-col items-center">
            {
            posts.map((post,index)=>{
                const date = post.created_at.split("T")[0];
                console.log(date)
                return(
                <PostCard
                myPost={true}
                key={index}
                index={index}
                image={post.imgUrl}
                tags={post.tags}
                title={post.title}
                excerpt={post.excerpt}
                date={date}
                author={"aman"}
                />
                )
            })
            }
        </div>
    )
}

export default Mypost;