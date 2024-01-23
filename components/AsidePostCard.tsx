import React from 'react'
import Image from 'next/image'
const AsidePostCard = ({Title,src,children}:any) => {
  return (
    <div className="AsidePostCard w-full md:min-h-[15em] overflow-hidden shadow  relative rounded-xl">

      <div className="Info w-full h-full">
      <Image src={src} alt='img' className='w-full h-full object-cover'/>

      <div className="TextLayer bg-gradient-to-t from-black  to-[#44440000] w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-end p-2 ">

        <div className="Text flex flex-col items-center break-all">
        <h1 className='text-[1.1em] font-bold'>{Title}</h1>
        <p className='text-sm text-gray-400'>
          {children}
        </p>
        </div>
       
      </div>
      </div>
      
    </div>
  )
}

export default AsidePostCard

{/* <PostCard media='md:min-h-[7em] bg-green-500 h-[17em] ' style = 'md:text-[80%] flex flex-col'/> */}