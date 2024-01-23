import Image from 'next/image'
import React from 'react'
const RapportCard = ({amount=22,Name = "Example",src = ''}) => {
  return (
    <div className='RapportCard min-w-fit w-full md:w-[4em] min-h-[4em] h-fit bg-white rounded-lg p-4  flex flex-col justify-start'>
        <div className="Icon flex  items-start justify-between gap-9 ">
        <div className="Title text-xl">{Name}</div>
            <Image src={src} alt='image' width={60} height={50}/>
            
        </div>
        
        <div className="Result">
            <h1 className='text-3xl text-indigo-500'>{amount}</h1>
        </div>
        </div>
  )
}

export default RapportCard