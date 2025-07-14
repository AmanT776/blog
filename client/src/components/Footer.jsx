import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = ()=>{
    return(
        <footer className='flex  flex-col items-center gap-3 py-5  mt-5 shadow-xl border-t-2  mt  '>
           <h1 className="text-purple-900 text-xl font-semibold">DaguBlog</h1>
            <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/amanueltesfaye/"><LinkedInIcon /></a>
                <a href="https://github.com/AmanT776"><GitHubIcon/></a>
            </div>
            <div className='flex justify-center items-center  gap-1'>
                <CopyrightIcon/>
                <p>2025 DaguBlogs. All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer;