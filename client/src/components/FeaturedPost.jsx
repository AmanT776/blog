import FeaturedCard from "./FeaturedCard";
import { usePost } from "@/context/postContext";
import { useFeaturedPost } from "@/hooks/useFeaturedPost";
const FeaturedPost = ()=>{
    const {featuredPost,isLoading} =  useFeaturedPost();
    if(isLoading) return <h1>Loading....</h1>
     return(
        featuredPost ? <FeaturedCard
            image={featuredPost.imgUrl}
            tags={featuredPost.tags}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            avatar={"test"}
            author={"test"}
            date={featuredPost.date}
        /> : <h1>No featured post</h1>
     )
        
}


export default FeaturedPost;