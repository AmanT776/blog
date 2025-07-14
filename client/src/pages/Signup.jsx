import { Button } from "@/components/ui/button";
import { 
     Card
    ,CardHeader
    ,CardTitle
    ,CardDescription
    ,CardAction
    ,CardContent
    ,CardFooter, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import API from "@/services/api";
import axios from "axios";

const Signup = ()=>{
    const [formValues,setFormValues] = useState({name: "",email: "",password: ""});
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e)=>{
            const {name,value} = e.target
            setFormValues((prev)=>{
                return({
                    ...prev,
                    [name]: value
                })
            })
        }
    const handleSignup = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const res = await API.post("/auth/signup",JSON.stringify(formValues));
            if(res){
                navigate('/login')
            } 
        }catch(err){
            alert(err.response.data);
            console.log(err.response.data.message)
        }finally{
            setLoading(false);
        }
    }
    
    return(
        <Card className="mx-auto w-[320px]  sm:w-[400px] sm:translate-y-1/2 translate-y-1/3">
            <CardHeader className="text-center">
                <CardTitle>Signup</CardTitle>
                <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSignup}>
                    <label>
                    Name
                        <Input name="name" value={formValues.name} onChange={handleChange} className="mb-2" placeholder="enter your name"/>
                    </label>
                    <label>
                        Email
                        <Input name="email" type={"email"} value={formValues.email} onChange={handleChange} placeholder="enter your email"/>
                    </label>
                    <label>
                        Password
                        <Input name="password" type={"password"} value={formValues.password} onChange={handleChange} placeholder="enter your password"/>
                    </label>
                <div className="flex mb-3 gap-2 justify-center items-center mt-3">
                    <CardDescription>already have an account? </CardDescription>
                    <Link to="/login"><CardAction className="hover:cursor-pointer">Login</CardAction></Link>
                </div>
                <Button type={"submit"} className="mx-auto w-full hover:cursor-pointer">Signup</Button>
                 </form>
            </CardContent>
             
        </Card>
    )
}

export default Signup;