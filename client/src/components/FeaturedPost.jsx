import usePosts from "@/hooks/usePosts";
import FeaturedCard from "./FeaturedCard";

const FeaturedPost = ()=>{
    const {posts,error,loading} = usePosts();
    if(!posts) return <h1>no posts</h1>
    const index = posts.length - 1;
    const featuredPost = posts[index];
    if(loading) return <h1>loading...</h1>
    if(error) return <h1>error</h1>
    if(featuredPost) return(
        <FeaturedCard
            image={featuredPost.imgUrl}
            tags={featuredPost.tags}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            avatar={"test"}
            author={"test"}
            date={featuredPost.date}
        />
    )
}

export default FeaturedPost;