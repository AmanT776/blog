import { Button } from "@/components/ui/button";
import {Link,useNavigate} from "react-router-dom"
import { 
     Card
    ,CardHeader
    ,CardTitle
    ,CardDescription
    ,CardAction
    ,CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import API from "@/services/api";

const Login = ()=>{
    const [formValues,setFormValues] = useState({email: "",password: ""});
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormValues((prev)=>{
            return({
                ...prev,
                [name]: value
            })
        })
        
    }
const handleLogin = async(e)=>{
    e.preventDefault();
    try{
        const res = await API.post('/auth/login',formValues);
        localStorage.setItem("token",res.data.token);
        navigate('/dashboard');
        console.log(res)
    }catch(err){
        alert(err)
        console.log(err.response.data)
    }
    
}
    return(
        <Card className="mx-auto w-fit translate-y-1/2">
            <CardHeader className="text-center">
                <CardTitle>Login to your Account</CardTitle>
                <CardDescription>Enter your email and password to login</CardDescription>
            </CardHeader>            
            <CardContent>
                <form onSubmit={handleLogin}>
                    <label>
                        Email
                        <Input type={"email"} name="email" value={formValues.email} onChange={handleChange} className="mb-3" placeholder="enter your email"/>
                    </label>
                    <label>
                        Password
                        <Input type={"password"} name="password" value={formValues.password} onChange={handleChange} placeholder="enter your password"/>
                    </label>
                <div className="flex mb-3 items-center gap-2 mt-3">
                    <CardDescription>don't have an account</CardDescription>
                    <Link to='/signup'><CardAction className="hover:cursor-pointer">Signup</CardAction></Link>
                </div>
                <Button type={"submit"} className="w-full hover:cursor-pointer">Login</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default Login;