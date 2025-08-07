import FeaturedCard from "./FeaturedCard";
import { useFeaturedPost } from "@/hooks/useFeaturedPost";

const FeaturedPost = ()=>{
    const {featuredPost,loading,error} =  useFeaturedPost();
    if(loading) return <h1>Loading....</h1>
    console.log(featuredPost)
     return(
        featuredPost ? <FeaturedCard
            image={featuredPost.imgUrl}
            tags={featuredPost.tags}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            avatar={featuredPost.user_id.avatar}
            author={featuredPost.user_id.name}
            date={featuredPost.created_at.split('T')[0]}
        /> : <h1>No featured post</h1>
     )
        
}


export default FeaturedPost;