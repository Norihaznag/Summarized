'use client' ;
import Link from "next/link"
import Theme from "./Theme"
import Menu from "./Menu"
import Window from "./Window"
import { createContext, useContext, useState } from "react";
import { ThemeContext } from "@/pages/_app";

export const Context = createContext({})

const Nav = ({css}:any) => {

  const [state,setState] :any = useContext(ThemeContext)

  return (
  
    <Context.Provider value={[state,setState]}>
 <nav className={`Nav w-full h-[3em]  flex items-center justify-between  gap-10   p-3 fixed top-0 rounded-b-md  ${state.Theme ? 'bg-gradient-to-br from-[#511B62]  to-[#30083D] text-white' : 'bg-[#ffaad7]'} z-50 `}>
       

       <div className="Logo flex gap-7 w-fit h-fit px-3">
           <h1 className="font-[CircularStd-Bold] text-[1.3em]">Summarized</h1>
           <div className="links max-[764px]:hidden md:flex relative  gap-4 items-center ">
           <Link href={'/'}>Posts</Link>
           <Link href={'Tags'}>Tags</Link>
           <Link href={'/Account'}>Account</Link>
           <Link href={'/FAQ'}>FAQ</Link>

       </div>
       </div>

       <div className="grid grid-cols-2 grid-rows-1 justify-center items-center gap-4 px-3">

               <Theme/>
           
           <Menu />
       </div>

       <Window />

       
   </nav>

    </Context.Provider>
      
  )
}

export default Nav