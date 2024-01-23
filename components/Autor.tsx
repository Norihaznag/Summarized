import Image from 'next/image'
import React from 'react'
import Photo from '@/public/images/600-600.jpg'

const Autor = ({Name = 'Noureddine Azinag' ,Role = "Admin",NameColor = 'text-[#1d1d1d]',RoleColor = 'text-[#5e5e5e]',src = Photo}) => {
  return (
  

<div className="grid grid-cols-4 grid-rows-1 pl-2 gap-3 w-fit h-[3em] items-center ">
  <Image src={src} alt='img' className='row-span-2 bg-[rgb(212,212,212)] grid justify-around items-center rounded-full w-[2em]'/>
 
    <div className="col-span-3 row-span-2 grid items-left text-sm">
        <h1 className={`font-bold  ${NameColor}`}>{Name}</h1>
        <h4 className={` ${RoleColor}`}>{Role}</h4>
    </div>
</div>
    
    
  )
}

export default Autor