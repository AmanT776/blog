
const PostCard = ({index,image,tags,title,excerpt,avatar,author,date,myPost})=>{
        return(
        <div className={myPost ? "mt-5 w-[70%] rounded-sm shadow-xl  h-[200px]  flex items-center justify-center " : "card  md:w-96 shadow-xl px-5 gap-3" } key={index}>
        <figure className={myPost ? " h-[170px]  " : "px-10 pt-10"}>
            <img
            src={image}
            alt="Shoes"
            className={myPost ? "h-[100%] w-[100%] rounded-xl": "rounded-xl"} />
        </figure>
         <div className={myPost ? " flex flex-col items-start  translate-x-2" : ""}>
            <div className={myPost? "flex gap-2":'flex  gap-2 mb-2'}>
                    {Array.isArray(tags) && tags.map((tag,index)=>{
                return(
                    <div key={index} className={myPost ? "": "flex justify-center translate-y-3"}>
                        <h3 className={myPost ? "p-1 rounded-sm bg-indigo-50 text-indigo-900": "bg-indigo-50 text-indigo-900 px-2 text-sm  rounded-md text-xs"}>{tag}</h3>
                    </div>
                )
            })}
            </div>
            <div className={myPost ? "flex flex-col items-start  mt-2": "card-body items-center"}>
            <h2 className={myPost ? "text-xl font-bold": "card-title text-xl"}>{title}</h2>
            <p className={myPost ? "": "text-lg"}>{excerpt}</p>
            <div className={"card-actions w-full flex items-center justify-start gap-3"}>
                    <div>
                        <img src={avatar} className={"w-[40px] h-[40px] rounded-full" }/>
                    </div>
                    <div className={myPost ? "": "flex flex-col"}>
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
}
export default PostCard;