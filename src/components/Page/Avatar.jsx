import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

export  function AvatarPic() {
  return (
    <Avatar className = "w-40 h-40 relative right-50 ">
  <AvatarImage src="https://github.com/shadcn.png"/>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  )
}
