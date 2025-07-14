import useMyPosts from "@/hooks/useMyPost";
import PostCard from "./PostCard";

const Mypost = ()=>{
    const {posts,error,loading} = useMyPosts();
    if(error) return <h1>{error}</h1>
    if(loading) return <h1>loading....</h1>
    console.log(posts)
    return(
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