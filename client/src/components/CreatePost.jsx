import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner"
import API from '@/services/api';
import { useEffect } from "react";
const CreatePost = ()=>{
    const [post,setPost] = useState({title: "",excerpt: "",tags: [],imgUrl: "",content: ""});
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setPost((prev)=>{
                if(name==="tags"){
                    const newValue = value.split(',');
                    return ({...prev,[name] : newValue})
                }else{return({
                    ...prev,
                    [name]: value
                })}
        })
    }
    const handlePost = async(e) =>{
        e.preventDefault();
        try{
            const res = await API.post('/posts/',JSON.stringify(post));
            toast.success("post created")
        }catch(err){
            toast.error(err.response.data);
        }
    }
    
    return(
        <form onSubmit={handlePost} className="flex  flex-col gap-3 p-10 md:px-20 md:py-29">
            <h1 className="text-2xl font-bold">Create New Post</h1>
            <label>
                Post Title
                <Input name='title' value={post.title} type={"text"} onChange={handleChange} placeholder="Enter title for a post"/>
            </label>
            <label>
                Excerpt
                <Input name='excerpt' value={post.excerpt} type={"text"} onChange={handleChange} placeholder="a brief summary of your post"/>
            </label>
            <label>
                Featured Image URL
                <Input name='imgUrl' value={post.imgUrl} type={"text"} onChange={handleChange} placeholder="https://example.com/image.jpt"/>
            </label> 
            <label>
                Tags
                <Input name='tags' value={post.tags} type={"text"} onChange={handleChange} placeholder="Technology, Web development,design"/>
            </label>
            <label>
                Content
                <Textarea name='content' value={post.content} type={"text"} onChange={handleChange} className="resize-none " placeholder="Write your post content here"/>
            </label>
            <Button  type="submit"  className="bg-indigo-800 rounded-sm ml-auto mr-10">Publish Post</Button>
        </form>
    )
}
export default CreatePost;