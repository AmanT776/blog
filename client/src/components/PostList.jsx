import PostCard from "./PostCard"
import usePosts from "@/hooks/usePosts";
const PostList = ()=>{
    const {posts} = usePosts();
    if(posts.length === 0) return <h1>no posts</h1>
    return(posts.map((post,index)=>{
            return(
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
            )
        })) 
    
}
export default PostList;