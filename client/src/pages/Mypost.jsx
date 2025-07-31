


const Mypost = ()=>{

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