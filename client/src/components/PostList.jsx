import { useEffect } from "react";
import PostCard from "./PostCard"
import { usePost } from "@/context/postContext";
import { useState } from "react";
const PostList = ()=>{
    const {getAllPost} = usePost();
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        async function fetchAllPosts(){
          const res = await getAllPost();
          setPosts(res);
        }
        fetchAllPosts()
    }, []);
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
                    avatar={"test"}
                    date={post.created_at.split('T')[0]}
                />
            ))}
           </>

    );
}
export default PostList;