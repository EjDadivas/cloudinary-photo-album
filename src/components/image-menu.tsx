import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { FolderPlus } from "lucide-react"
  export function ImageMenu() {
    return (
        <div className="absolute top-2 right-2">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
            <DropdownMenuItem>
              <FolderPlus className="mr-2 h-4 w-4"/>
              <span>Add to Album</span>
            </DropdownMenuItem>
           
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  