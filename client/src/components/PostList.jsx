import { useEffect } from "react";
import PostCard from "./PostCard"
import { usePost } from "@/context/postContext";
import { useState } from "react";
const PostList = ()=>{
    const {getAllPost} = usePost();
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function fetchAllPosts(){
          try{
            const res = await getAllPost();
            setPosts(res);
          }catch(e){
            setError(e)
          }finally{
            setLoading(false)
          }
        }
        fetchAllPosts()
    }, []);
    if(loading) return <h1>Loading....</h1>
    if(posts.length === 0) return <h1>No post to display</h1> 
    console.log(posts[0].user_id.avatar)
    return (
           <>
             {posts.map((post, index) => (
                <PostCard
                    key={index}
                    index={index}
                    image={post.imgUrl}
                    tags={post.tags}
                    title={post.title}
                    excerpt={post.excerpt}
                    avatar={post.user_id.avatar}
                    author={post.user_id.name}
                    date={post.created_at.split('T')[0]}
                />
            ))}
           </>

    );
}
export default PostList;