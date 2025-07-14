import {posts} from '../utils/mockData'

const FeaturedCard = ({id,image,tags,title,excerpt,avatar,author,date})=>{
    return(
            <div key={id}  className="card   md:card-side md:w-[90%] lg:w-[70%] lg:h-[300px] md:mx-auto shadow-xl ">
            <figure className='md:w-1/2'>
                <img
                src={image}
                alt="blog image"
                />
            </figure>
            <div className="card-body md:translate-x-1 pl-2 w-full">
                <div className='flex gap-1 mb-2  w-full'>
                    {tags.map((tag,index)=>{
                return(
                    <div key={index} className="flex justify-center ">
                        <h3 className="bg-indigo-50 text-indigo-900 px-2  rounded-md text-xs ">{tag}</h3>
                    </div>
                )
            })}
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{excerpt}</p>
            <div>
                <div className='flex justify-start  gap-2'>
                    <img className='w-[40px] h-[40px] rounded-full' src={avatar}/>
                    <div>
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default FeaturedCard;