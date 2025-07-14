import profile from '@/assets/pp.jpg';
import HamburgerMenu from './HamburgerMenu';
import {NavLink} from 'react-router-dom'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select"
import { Button } from '@mui/material';

const Header = ()=>{
    
    return(
        <header className="p-3 md:text-[13px] lg:text-auto md:px-50 border border-b-zinc-200  ">
            <nav className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <h1 className="text-purple-900 text-xl font-semibold p-2">DaguBlog</h1>
                    <HamburgerMenu/>
                    <div className="md:flex gap-3 items-center hidden ">
                        <ul className="text-slate-950  flex gap-3">
                            <NavLink to="/dashboard"
                            className={({isActive})=>{return(isActive ? "bg-blue-200 rounded-sm" : "")}}>
                                <li className="hover:bg-blue-200 hover:cursor-pointer hover:rounded-sm hover:border-1 p-2">All posts</li>
                            </NavLink>
                            <NavLink to='/myPost'
                            className={({isActive})=>{return(isActive ? "bg-blue-200 rounded-sm" : "")}}>
                                <li className="hover:bg-blue-200 hover:cursor-pointer hover:rounded-sm hover:border-1 p-2">My Posts</li>
                            </NavLink>
                            <NavLink to='/createPost'
                            className={({isActive})=>{return(isActive ? "bg-blue-200 rounded-sm" : "")}}>
                                <li className="hover:bg-blue-200 hover:cursor-pointer hover:rounded-sm hover:border-1 p-2">Create Post</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                 <Select className="">
                    <SelectTrigger className="w-[180px] border-none">
                        <div className='flex gap-3'>
                            <img src={profile} alt="profile picture" className='w-[50px] h-[50px] rounded-full'/>
                            <div>
                                <h1 className='font-bold'>user</h1>
                                <p className='text-zinc-500'>author</p>
                            </div>
                        </div>
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup className="flex flex-col items-center">
                            <NavLink to='/profile'><Button>Profile</Button></NavLink>
                            <NavLink to='/login'><Button>Logout</Button></NavLink>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </nav>
        </header>
    )
}
export default Header;