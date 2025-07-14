import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const HamburgerMenu = ()=>{

    return(
        <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden"><MenuIcon/></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>AllPosts</DropdownMenuItem>
            <DropdownMenuItem>MyPosts</DropdownMenuItem>
            <DropdownMenuItem>CreatePosts</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default HamburgerMenu;