import Image from 'next/image'
import React from 'react'

const SectionImage = ({src,className}:any) => {
  return (
    <div className='SectionImage'>
        <Image src={src} className={className} alt='image'/>
    </div>
  )
}

export default SectionImage