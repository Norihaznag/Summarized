import Image from "next/image"
import Light from '@/public/icons/mode-light-svgrepo-com.svg'
import Dark from '@/public/icons/mode-dark-svgrepo-com.svg'
import {useContext, useState } from "react"
import { ThemeContext } from "@/pages/_app"

const Theme = (css:any)=> {
    const [Mode,setMode]:any = useContext(ThemeContext) ;

  return (
    <div className={`md:hover:bg-[#e7e7e728] md:p-2  rounded-full  ${css} `}onClick={()=>{
        setMode((prev : any)=>{
          return {...prev,Theme : !Mode.Theme}
        })
    }}>
        <Image src={Mode.Theme ? Dark : Light} alt={'theme'} width={25} height={25}/>
    </div>
  )
}

export default Theme