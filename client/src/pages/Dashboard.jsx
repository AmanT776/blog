import PostList from "@/components/PostList";
import FeaturedPost from "@/components/FeaturedPost";

const Dashboard = ()=>{
    
    return(
        <>
            <div className="overflow-hidden">
            <div className="translate-x-6 mt-2 w-full mr-2">
                <h2 className="text-gray-950 text-2xl font-bold">Welcome to DaguBlog</h2>
                <p>Discover interesting stories and insights from our authors</p>
            </div>
           <div className="mt-3">
                <h3 className="font-semibold text-xl lg:translate-x-70 lg:mb-2   translate-x-10 md:text-start">Featured Post</h3>
                <div className="p-12 md:p-0 ">
                <FeaturedPost/>
                </div>
            </div>
                <div>
                    <h2 className="translate-x-10 mt-6 text-xl lg:translate-x-40 font-semibold">Latest Articles</h2>
                    <div className="flex flex-wrap gap-5 justify-center pt-5 p-12 lg:p-8 md:p-0">
                    <PostList/>
                </div>
                </div>   
        </div>
        </>
    )
}
export default Dashboard;