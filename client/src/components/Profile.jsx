import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button"
import { useState } from "react";

const Profile = ()=>{
    const [formValues,setFormValues] = useState();
    const handleChange = (e)=>{
        const {name,value} = e.taget
    }
    return(
        <>
            <div className="p-10">
                <h1 className="text-xl font-semibold ">Profile Settings</h1>
                <div className="w-[100px]">
                    <img className="rounded-full w-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                </div>
                <form className="flex flex-col gap-5">
                    <div className="md:flex md:justify-evenly  w-full">
                        <div className="w-full">
                            <label>
                                Name
                                <Input  type="text" placeholder="enter your name"/>
                            </label>
                        </div>
                        <div className="w-full">
                            <label>
                            Email
                                <Input type="email" placeholder="enter your email"/>
                            </label>
                        </div>
                    </div>
                    <div className="md:flex md:justify-evenly ">
                        <div className="w-full">
                            <label>
                                avatar
                                <Input  type="text" placeholder="please enter your image url"/>
                            </label>
                        </div>
                       <div className="w-full">
                            <label>
                                password
                                <Input  type="text" placeholder="new password"/>
                            </label>
                       </div>
                    </div>
                    <div className="flex gap-2">
                        <Button className="bg-gray-200 text-black">Cancel</Button>
                        <Button className="bg-blue-800">Save Changes</Button>
                    </div>
                </form>
                
            </div>
        </>
    )
}
export default Profile;