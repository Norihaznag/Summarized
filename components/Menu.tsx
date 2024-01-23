'use client';
import Image from "next/image"
import Menuicon from '@/public/icons/menu-dots-svgrepo-com.svg'
import { useContext, useState } from "react";
import { ThemeContext } from "@/pages/_app"

const Menu = ({onClick}:any) => {
  const [state,setState]:any = useContext(ThemeContext);

  return (
    <div className="w-full h-full flex  justify-center" onClick={()=>{
      setState((prev:any)=>{
        return {...prev,Window: ! state.Window}
      })
    }}>
        <Image src={Menuicon} alt='img' className={`Menu md:hidden flex  cursor-pointer `}/>
    </div>
  )
}

export default Menu