import PostList from "@/components/PostList";
import FeaturedPost from "@/components/FeaturedPost";

const Dashboard = ()=>{
    
    return(
        <>
            <div className="">
            <div className="translate-x-6 mt-2 max-w-200 mr-2  ">
                <h2 className="text-gray-950 text-2xl font-bold max-w-100 ">Welcome to DaguBlog</h2>
                <p className="max-w-200 ">Discover interesting stories and insights from our authors</p>
            </div>
           <div className="mt-3">
                <h3 className="font-semibold text-xl lg:translate-x-70 lg:mb-2 max-w-50    translate-x-10 md:text-start">Featured Post</h3>
                <div className=" md:p-0 ">
                <FeaturedPost/>
                </div>
            </div>
                <div className="">
                    <h2 className="translate-x-10  mt-6 text-xl lg:translate-x-40 max-w-50 font-semibold">Latest Articles</h2>
                    <div className="flex flex-wrap gap-5">
                        <PostList/>
                    </div>
                </div>   
        </div>
        </>
    )
}
export default Dashboard;