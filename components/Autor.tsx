import Image from 'next/image'
import React from 'react'
import Photo from '@/public/images/600-600.jpg'
const Autor = () => {
  return (
  

<div className="grid grid-cols-4 grid-rows-1 pl-2 gap-3 w-fit h-[3em] ">
  <Image src={Photo} alt='img' className='row-span-2 bg-[rgb(212,212,212)] grid justify-around items-center rounded-full w-[3em]'/>
    {/* <div className="row-span-2 bg-[rgb(212,212,212)] grid justify-around items-center rounded-full w-[3em]">1</div> */}
    <div className="col-span-3 row-span-2 grid items-left">
        <h1 className='font-bold text-[1.1em]'>Noureddine aznag</h1>
        <h4 className='text-sm text-[#747474]'>Role And Description</h4>
    </div>
</div>
    
    
  )
}

export default Autor