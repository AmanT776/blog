import PostCard from "./PostCard"
import usePosts from "@/hooks/usePosts";
const PostList = ()=>{
    const {posts} = usePosts();
    if(!posts) return <h1>no posts</h1>
    return(
        posts.length > 0 ? posts.map((post,index)=>{
            return(
                <PostCard
                key={index}
                index={index}
                image={post.imgUrl}
                tags={post.tags}
                title={post.title}
                excerpt={post.excerpt}
                // avatar={post.author.avatar}
                date={post.created_at.split('T')[0]}
                />
            )
        }) : <h1>no post to display</h1>
    )
}
export default PostList;